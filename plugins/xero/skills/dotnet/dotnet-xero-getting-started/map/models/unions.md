# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (1)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `Nicategory1` | Nicategory, Nicategory2 | `Nicategory1.Nicategory(Nicategory)`, `Nicategory1.Nicategory2(Nicategory2)` | `TryGetNicategory(out …)`, `TryGetNicategory2(out …)` | `Nicategory`, `Nicategory2` | `Models/AnyOf/Nicategory1.cs` |
