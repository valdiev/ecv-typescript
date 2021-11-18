"use strict";
const easyStep = {
    // "": ["bla", "bl", "a"],
    "abcdef": ["ab", "abc", "cd", "def", "abcd"]
};
let word = "abcdef";
let key = ["ab", "abc", "cd", "def", "abcd"];
function checkProb(word, key, memo = {}) {
    if (word in memo) {
        return memo[word];
    }
    if (word === "") {
        return true;
    }
    for (let element of key) {
        if (word.indexOf(element) === 0) {
            const reste = word.slice(element.length);
            if (checkProb(reste, key)) {
                memo[word] = true;
                return true;
            }
        }
    }
    memo[word] = false;
    return false;
}
console.log(checkProb(word, key));
// CORRECTION
function constructionPossible(objectif, // Mon objectif courant
alphabet, // Mon alphabet
memo = {} // Mon cache mémoire
) {
    /**
     * Si j'ai déjà un résultat pour <objectif> dans mon cache,
     * Je renvoie ce résultat
     */
    if (objectif in memo)
        return memo[objectif];
    /**
     * Si mon objectif est une chaine de caractères vide,
     * Alors la fonction renvoie toujours vrai
     */
    if (objectif === "")
        return true;
    /**
     * Pour les objectifs "normaux", qui ne sont pas déjà dans le cache,
     * pour chaque element de l'alphabet ...
     */
    for (let element of alphabet) {
        /**
         * ... est ce que mon objectif commence par cet element ?
         */
        if (objectif.indexOf(element) === 0) {
            /**
             * Je reconstruit un sous-objectifs "reste" qui est l'objectif initial
             * moins l'élément
             */
            const reste = objectif.slice(element.length);
            /**
             * Et j'appelle récursivement la fonction avec le sous-objectif
             */
            if (constructionPossible(reste, alphabet, memo)) {
                /**
                 * Si le sous-objectif est constructible, alors je mémorise VRAI
                 * dans le cache et je renvoie le résultat
                 */
                memo[objectif] = true;
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=resolutionProb.js.map