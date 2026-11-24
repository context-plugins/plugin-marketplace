using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Address response.
/// </summary>
public record AddressResponse
{
    /// <summary>
    /// Address line 1
    /// </summary>
    [JsonPropertyName("line1")]
    [MinLength(1)]
    [RegularExpression("^.{0,1000}$")]
    public required string Line1 { get; init; }

    /// <summary>
    /// Address line 2
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    [RegularExpression("^.{0,100}$")]
    public string? Line2 { get; init; }

    /// <summary>
    /// Address city
    /// </summary>
    [JsonPropertyName("city")]
    [MinLength(1)]
    [RegularExpression("^.{0,100}$")]
    public required string City { get; init; }

    /// <summary>
    /// State or province
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateOrProvince")]
    [RegularExpression("^.{0,100}$")]
    public string? StateOrProvince { get; init; }

    /// <summary>
    /// Zip or postal code
    /// </summary>
    [JsonPropertyName("zipOrPostalCode")]
    [MinLength(1)]
    [RegularExpression("^.{0,30}$")]
    public required string ZipOrPostalCode { get; init; }

    [JsonPropertyName("country")]
    public required CountryCode Country { get; init; }

    /// <summary>
    /// Country name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryName")]
    public string? CountryName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
