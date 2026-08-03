# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (8)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `AssetId` | string | `AssetId.String(string)` | `TryGetString(out …)` | `string` | `Models/AnyOf/AssetId.cs` |
| `ContributorCountry` | IReadOnlyList<string> | `ContributorCountry.ListOfString(IReadOnlyList<string>)` | `TryGetListOfString(out …)` | — | `Models/AnyOf/ContributorCountry.cs` |
| `ContributorCountryModel` | IReadOnlyList<string> | `ContributorCountryModel.ListOfString(IReadOnlyList<string>)` | `TryGetListOfString(out …)` | — | `Models/AnyOf/ContributorCountryModel.cs` |
| `Country2` | Country, Country1 | `Country2.Country(Country)`, `Country2.Country1(Country1)` | `TryGetCountry(out …)`, `TryGetCountry1(out …)` | `Country`, `Country1` | `Models/AnyOf/Country2.cs` |
| `Image3` | LicenseImage, LicenseImageVector | `Image3.LicenseImage(LicenseImage)`, `Image3.LicenseImageVector(LicenseImageVector)` | `TryGetLicenseImage(out …)`, `TryGetLicenseImageVector(out …)` | `LicenseImage`, `LicenseImageVector` | `Models/AnyOf/Image3.cs` |
| `IsocountryCode2` | IsocountryCode, IsocountryCode1 | `IsocountryCode2.IsocountryCode(IsocountryCode)`, `IsocountryCode2.IsocountryCode1(IsocountryCode1)` | `TryGetIsocountryCode(out …)`, `TryGetIsocountryCode1(out …)` | `IsocountryCode`, `IsocountryCode1` | `Models/AnyOf/IsocountryCode2.cs` |
| `Region` | string, string | `Region.String(string)`, `Region.IpString(string)` | `TryGetString(out …)`, `TryGetIpString(out …)` | — | `Models/AnyOf/Region.cs` |
| `RegionModel` | string, string | `RegionModel.String(string)`, `RegionModel.IpString(string)` | `TryGetString(out …)`, `TryGetIpString(out …)` | — | `Models/AnyOf/RegionModel.cs` |
