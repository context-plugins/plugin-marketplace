# Enums

18 enums (17 string / 1 int), namespace `SpotifyWebApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `AlbumGroup` | StringEnum | `Album (album)`, `Single (single)`, `Compilation (compilation)`, `AppearsOn (appears_on)` | This field describes the relationship between the artist and the album. | `Models/Enums/AlbumGroup.cs` |
| `AlbumType` | StringEnum | `Album (album)`, `Single (single)`, `Compilation (compilation)` | The type of the album. | `Models/Enums/AlbumType.cs` |
| `IncludeExternal` | StringEnum | `Audio (audio)` | If `include_external=audio` is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response. | `Models/Enums/IncludeExternal.cs` |
| `Itemtype` | StringEnum | `Album (album)`, `Artist (artist)`, `Playlist (playlist)`, `Track (track)`, `Show (show)`, `Episode (episode)`, `Audiobook (audiobook)` | — | `Models/Enums/Itemtype.cs` |
| `ItemType1` | StringEnum | `Artist (artist)` | The ID type: currently only `artist` is supported. | `Models/Enums/ItemType1.cs` |
| `ItemType2` | StringEnum | `Artist (artist)`, `User (user)` | The ID type. | `Models/Enums/ItemType2.cs` |
| `ItemType3` | StringEnum | `Artist (artist)`, `User (user)` | The ID type: either `artist` or `user`. | `Models/Enums/ItemType3.cs` |
| `Mode` | IntEnum | `Negative1 (-1)`, `Value0 (0)`, `Value1 (1)` | Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same … | `Models/Enums/Mode.cs` |
| `Reason` | StringEnum | `Market (market)`, `Product (product)`, `Explicit (explicit)` | The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content. Additional reasons may be added in the future. | `Models/Enums/Reason.cs` |
| `ReleaseDatePrecision` | StringEnum | `Year (year)`, `Month (month)`, `Day (day)` | The precision with which `release_date` value is known. | `Models/Enums/ReleaseDatePrecision.cs` |
| `Type2` | StringEnum | `Album (album)` | The object type. | `Models/Enums/Type2.cs` |
| `Type3` | StringEnum | `Track (track)` | The object type: "track". | `Models/Enums/Type3.cs` |
| `Type4` | StringEnum | `User (user)` | The object type. | `Models/Enums/Type4.cs` |
| `Type5` | StringEnum | `Episode (episode)` | The object type. | `Models/Enums/Type5.cs` |
| `Type6` | StringEnum | `Show (show)` | The object type. | `Models/Enums/Type6.cs` |
| `Type8` | StringEnum | `AudioFeatures (audio_features)` | The object type. | `Models/Enums/Type8.cs` |
| `Type9` | StringEnum | `Audiobook (audiobook)` | The object type. | `Models/Enums/Type9.cs` |
| `TypeModel` | StringEnum | `Artist (artist)` | The object type. | `Models/Enums/TypeModel.cs` |
