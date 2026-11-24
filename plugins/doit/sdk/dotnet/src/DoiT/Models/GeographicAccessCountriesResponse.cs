using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record GeographicAccessCountriesResponse
{
    [JsonPropertyName("countries")]
    public required IReadOnlyList<GeographicAccessCountry> Countries { get; init; }
}
