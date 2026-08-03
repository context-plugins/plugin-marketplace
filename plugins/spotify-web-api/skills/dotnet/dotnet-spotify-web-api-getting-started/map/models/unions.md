# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (4)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `CurrentlyPlaying` | TrackObject, EpisodeObject | `CurrentlyPlaying.TrackObject(TrackObject)`, `CurrentlyPlaying.EpisodeObject(EpisodeObject)` | `TryGetTrackObject(out …)`, `TryGetEpisodeObject(out …)` | `TrackObject`, `EpisodeObject` | `Models/AnyOf/CurrentlyPlaying.cs` |
| `Item` | TrackObject, EpisodeObject | `Item.TrackObject(TrackObject)`, `Item.EpisodeObject(EpisodeObject)` | `TryGetTrackObject(out …)`, `TryGetEpisodeObject(out …)` | `TrackObject`, `EpisodeObject` | `Models/AnyOf/Item.cs` |
| `Queue` | TrackObject, EpisodeObject | `Queue.TrackObject(TrackObject)`, `Queue.EpisodeObject(EpisodeObject)` | `TryGetTrackObject(out …)`, `TryGetEpisodeObject(out …)` | `TrackObject`, `EpisodeObject` | `Models/AnyOf/Queue.cs` |
| `Track11` | TrackObject, EpisodeObject | `Track11.TrackObject(TrackObject)`, `Track11.EpisodeObject(EpisodeObject)` | `TryGetTrackObject(out …)`, `TryGetEpisodeObject(out …)` | `TrackObject`, `EpisodeObject` | `Models/AnyOf/Track11.cs` |
