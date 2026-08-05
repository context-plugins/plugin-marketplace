# Records (`Currency` … `UnprocessableEntity1`)

**Exact coverage: `Currency` through `UnprocessableEntity1`**, alphabetical — these are the literal first and last record names on this page; a name outside that range is on a neighbouring page.

Plain `record` data models (immutable, `init`-only). Each field is `CSharpName (wire_name): Type` —
the parenthesized name is the JSON wire name (`[JsonPropertyName]`). `!req` = C# `required` (must be
set in the object initializer); a trailing `?` on the type = nullable/optional; a field with neither
is optional with a generated default — where the source declares an explicit default it is shown as
`= value`. Summary is the record's XML doc summary (`—` when the source has none). Error-payload
models (the `out` types named by the operation pages' error accessors) are listed here like any
other record. A field whose type is a `OneOf`/`AnyOf` union is tagged `(union)` — construct and
read it via `unions.md` (factories + `TryGet…`), not as a record.
All records on these pages live in namespace `FrankfurterApi.Models`.

| Record | Summary | Fields | Source |
|---|---|---|---|
| `Currency` | — | `IsoCode (iso_code): string !req`, `IsoNumeric (iso_numeric): string?`, `Name (name): string !req`, `Symbol (symbol): string?`, `StartDate (start_date): DateTimeOffset?`, `EndDate (end_date): DateTimeOffset?` | `Models/Currency.cs` |
| `CurrencyDetail` | — | `IsoCode (iso_code): string !req`, `IsoNumeric (iso_numeric): string?`, `Name (name): string !req`, `Symbol (symbol): string?`, `Providers (providers): IReadOnlyList<string>?`, `Peg (peg): Peg?` | `Models/CurrencyDetail.cs` |
| `NotFound` | — | `Message (message): string?` | `Models/NotFound.cs` |
| `NotFound1` | — | `Message (message): string?` | `Models/NotFound1.cs` |
| `Peg` | Peg metadata, present only for pegged currencies | `Base (base): string?`, `Rate (rate): double?`, `Authority (authority): string?`, `Source (source): string?` | `Models/Peg.cs` |
| `Provider` | — | `Key (key): string !req`, `Name (name): string !req`, `CountryCode (country_code): string?`, `RateType (rate_type): string?`, `PivotCurrency (pivot_currency): string?`, `DataUrl (data_url): string?`, `TermsUrl (terms_url): string?`, `StartDate (start_date): DateTimeOffset?`, `EndDate (end_date): DateTimeOffset?`, `PublishCadence (publish_cadence): PublishCadence?`, `PublishesMissed (publishes_missed): int?`, `Currencies (currencies): IReadOnlyList<string> !req` | `Models/Provider.cs` |
| `Provider2` | — | `Key (key): string !req`, `Date (date): DateTimeOffset !req`, `Rate (rate): double !req`, `Excluded (excluded): bool?` | `Models/Provider2.cs` |
| `Rate` | — | `Date (date): DateTimeOffset !req`, `Base (base): string !req`, `Quote (quote): string !req`, `RateValue (rate): double !req`, `Providers (providers): IReadOnlyList<Provider2>?` | `Models/Rate.cs` |
| `ServiceUnavailable` | — | `Message (message): string?` | `Models/ServiceUnavailable.cs` |
| `ServiceUnavailable1` | — | `Message (message): string?` | `Models/ServiceUnavailable1.cs` |
| `UnprocessableEntity` | — | `Message (message): string?` | `Models/UnprocessableEntity.cs` |
| `UnprocessableEntity1` | — | `Message (message): string?` | `Models/UnprocessableEntity1.cs` |
