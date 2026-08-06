# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (2)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `LocationMarker` | SingleLocationMarker, MultiLocationMarker | `LocationMarker.SingleLocationMarker(SingleLocationMarker)`, `LocationMarker.MultiLocationMarker(MultiLocationMarker)` | `TryGetSingleLocationMarker(out …)`, `TryGetMultiLocationMarker(out …)` | `SingleLocationMarker`, `MultiLocationMarker` | `Models/OneOf/LocationMarker.cs` |
| `SingleLocationMarkerResponseData` | SingleLocationMarker, MultiLocationMarker | `SingleLocationMarkerResponseData.SingleLocationMarker(SingleLocationMarker)`, `SingleLocationMarkerResponseData.MultiLocationMarker(MultiLocationMarker)` | `TryGetSingleLocationMarker(out …)`, `TryGetMultiLocationMarker(out …)` | `SingleLocationMarker`, `MultiLocationMarker` | `Models/OneOf/SingleLocationMarkerResponseData.cs` |

## AnyOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
