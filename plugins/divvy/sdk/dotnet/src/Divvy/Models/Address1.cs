using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

public record Address1
{
    /// <summary>
    /// Address line 1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line1")]
    [RegularExpression("^.{0,1000}$")]
    public string? Line1 { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [RegularExpression("^.{0,100}$")]
    public string? City { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zipOrPostalCode")]
    [RegularExpression("^.{0,30}$")]
    public string? ZipOrPostalCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public CountryCode? Country { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
