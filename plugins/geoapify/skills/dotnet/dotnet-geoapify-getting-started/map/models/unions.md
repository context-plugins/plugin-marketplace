# Unions (OneOf / AnyOf)

Union types wrap several `Optional<T>` variants. Construct with a static factory (`Union.Factory(variant)`) or an implicit conversion where listed; read back with the matching `TryGet…(out …)` — it returns `true` when that variant is set. Cells show `—` when the union declares none.

## OneOf (0)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|

## AnyOf (4)

| Union | Variants | Factories | TryGet accessors | Implicit from | Source |
|---|---|---|---|---|---|
| `Coordinates` | IReadOnlyList<IReadOnlyList<IReadOnlyList<double>>>, IReadOnlyList<IReadOnlyList<IReadOnlyList<IReadOnlyList<double>>>> | `Coordinates.ListOfListOfListOfDouble(IReadOnlyList<IReadOnlyList<IReadOnlyList<double>>>)`, `Coordinates.ListOfListOfListOfListOfDouble(IReadOnlyList<IReadOnlyList<IReadOnlyList<IReadOnlyList<double>>>>)` | `TryGetListOfListOfListOfDouble(out …)`, `TryGetListOfListOfListOfListOfDouble(out …)` | — | `Models/AnyOf/Coordinates.cs` |
| `GeocodeAutocompleteResponse` | AutocompleteJsonResponse, AutocompleteGeoJsonResponse | `GeocodeAutocompleteResponse.AutocompleteJsonResponse(AutocompleteJsonResponse)`, `GeocodeAutocompleteResponse.AutocompleteGeoJsonResponse(AutocompleteGeoJsonResponse)` | `TryGetAutocompleteJsonResponse(out …)`, `TryGetAutocompleteGeoJsonResponse(out …)` | `AutocompleteJsonResponse`, `AutocompleteGeoJsonResponse` | `Models/AnyOf/GeocodeAutocompleteResponse.cs` |
| `GeocodeReverseResponse` | ReverseGeocodingJsonResponse, ReverseGeocodingGeoJsonResponse | `GeocodeReverseResponse.ReverseGeocodingJsonResponse(ReverseGeocodingJsonResponse)`, `GeocodeReverseResponse.ReverseGeocodingGeoJsonResponse(ReverseGeocodingGeoJsonResponse)` | `TryGetReverseGeocodingJsonResponse(out …)`, `TryGetReverseGeocodingGeoJsonResponse(out …)` | `ReverseGeocodingJsonResponse`, `ReverseGeocodingGeoJsonResponse` | `Models/AnyOf/GeocodeReverseResponse.cs` |
| `RoutingResponse` | RoutingJsonResponse, RoutingGeoJsonResponse | `RoutingResponse.RoutingJsonResponse(RoutingJsonResponse)`, `RoutingResponse.RoutingGeoJsonResponse(RoutingGeoJsonResponse)` | `TryGetRoutingJsonResponse(out …)`, `TryGetRoutingGeoJsonResponse(out …)` | `RoutingJsonResponse`, `RoutingGeoJsonResponse` | `Models/AnyOf/RoutingResponse.cs` |
