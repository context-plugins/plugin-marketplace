using System.Text.Json.Serialization;
using RocketReach.Core.Models;

namespace RocketReach.Models;

/// <summary>
/// Serializer for company details (API).
/// </summary>
public record CompiledCompanyPublicDetails
{
    /// <summary>
    /// RocketReach internal unique company ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public int? Id { get; init; }

    /// <summary>
    /// Name of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Email domain for the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_domain")]
    public string? EmailDomain { get; init; }

    /// <summary>
    /// Ticker symbol for the company (if available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ticker_symbol")]
    public string? TickerSymbol { get; init; }

    /// <summary>
    /// Industry of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("industry_str")]
    public string? IndustryStr { get; init; }

    /// <summary>
    /// City of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// Region of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// Country code of the company
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country_code")]
    public string? CountryCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
