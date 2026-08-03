# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (6)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `Icon` | Emoji, File | `Icon.Emoji(Emoji)`, `Icon.File(File)` | `TryGetEmoji(out …)`, `TryGetFile(out …)` | `Emoji`, `File` | `Models/AnyOf/Icon.cs` |
| `Icon1` | Emoji, ExternalFile | `Icon1.Emoji(Emoji)`, `Icon1.ExternalFile(ExternalFile)` | `TryGetEmoji(out …)`, `TryGetExternalFile(out …)` | `Emoji`, `ExternalFile` | `Models/AnyOf/Icon1.cs` |
| `Icon11` | Emoji, ExternalFile | `Icon11.Emoji(Emoji)`, `Icon11.ExternalFile(ExternalFile)` | `TryGetEmoji(out …)`, `TryGetExternalFile(out …)` | `Emoji`, `ExternalFile` | `Models/AnyOf/Icon11.cs` |
| `Icon2` | Emoji, ExternalFile | `Icon2.Emoji(Emoji)`, `Icon2.ExternalFile(ExternalFile)` | `TryGetEmoji(out …)`, `TryGetExternalFile(out …)` | `Emoji`, `ExternalFile` | `Models/AnyOf/Icon2.cs` |
| `Icon21` | Emoji, ExternalFile | `Icon21.Emoji(Emoji)`, `Icon21.ExternalFile(ExternalFile)` | `TryGetEmoji(out …)`, `TryGetExternalFile(out …)` | `Emoji`, `ExternalFile` | `Models/AnyOf/Icon21.cs` |
| `Icon3` | Emoji, File | `Icon3.Emoji(Emoji)`, `Icon3.File(File)` | `TryGetEmoji(out …)`, `TryGetFile(out …)` | `Emoji`, `File` | `Models/AnyOf/Icon3.cs` |
