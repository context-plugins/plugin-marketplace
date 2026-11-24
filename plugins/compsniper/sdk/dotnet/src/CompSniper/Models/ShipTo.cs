using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record ShipTo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    public CountryCode? CountryCode { get; init; } = CountryCode.Us;

    [JsonPropertyName("postalCode")]
    [RegularExpression("^[0-9]{5}(-[0-9]{4})?$")]
    public required string PostalCode { get; init; }
}
