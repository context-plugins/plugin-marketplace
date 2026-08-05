# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (1)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `EndScreen3` | EndScreen, IReadOnlyList<object> | `EndScreen3.EndScreen(EndScreen)`, `EndScreen3.ListOfAnonymousObject(IReadOnlyList<object>)` | `TryGetEndScreen(out …)`, `TryGetListOfAnonymousObject(out …)` | `EndScreen` | `Models/AnyOf/EndScreen3.cs` |
