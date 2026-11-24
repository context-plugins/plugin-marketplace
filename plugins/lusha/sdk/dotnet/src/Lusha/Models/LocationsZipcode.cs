using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record LocationsZipcode
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryIso2")]
    public string? CountryIso2 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zipcode")]
    public string? Zipcode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
