# Différence entre `filter()` et `find()`

- **`filter()`** : retourne un nouveau tableau contenant tous les éléments qui respectent la condition.
- **`find()`** : retourne le premier élément qui respecte la condition. Si aucun élément ne correspond, elle retourne `undefined`.

## Différence entre `find()` et une boucle `for`

Avec `find()`, la recherche s'arrête automatiquement dès qu'elle trouve le premier élément correspondant à la condition.

Avec une boucle `for`, si on affecte chaque résultat à la même variable sans arrêter la boucle, la variable garde finalement le dernier élément correspondant.

Pour que la boucle `for` se comporte comme `find()`, on peut utiliser `break` après avoir trouvé le premier élément.

**Exemple dans notre catalogue :**

- `filter()` retourne tous les produits disponibles.
- `find()` retourne le premier produit avec l'id 4.
- Une boucle `for` sans `break` garde le dernier produit avec l'id 4.
- Une boucle `for` avec `break` garde le premier produit avec l'id 4.