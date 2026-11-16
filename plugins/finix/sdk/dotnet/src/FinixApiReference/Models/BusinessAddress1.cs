using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// The primary address for the legal entity.
/// </summary>
public record BusinessAddress1
{
    /// <summary>
    /// City (max 20 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [MinLength(1)]
    public string? City { get; init; }

    /// <summary>
    /// 3-Letter Country code (e.g. USA).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    [MinLength(1)]
    public string? Country { get; init; }

    /// <summary>
    /// First line of the address (max 35 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line1")]
    [MinLength(1)]
    public string? Line1 { get; init; }

    /// <summary>
    /// Second line of the address (max 35 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    [MinLength(1)]
    public string? Line2 { get; init; }

    /// <summary>
    /// Zip code (max 7 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postal_code")]
    [MinLength(1)]
    public string? PostalCode { get; init; }

    /// <summary>
    /// 2-letter state code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    [MinLength(1)]
    public string? Region { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
