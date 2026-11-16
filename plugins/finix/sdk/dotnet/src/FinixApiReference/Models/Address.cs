using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Address
{
    /// <summary>
    /// First line of the address (max 35 characters).
    /// </summary>
    [JsonPropertyName("line1")]
    [MinLength(1)]
    public required string? Line1 { get; init; }

    /// <summary>
    /// Second line of the address (max 35 characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    [MinLength(1)]
    public string? Line2 { get; init; }

    /// <summary>
    /// City (max 20 characters).
    /// </summary>
    [JsonPropertyName("city")]
    [MinLength(1)]
    public required string? City { get; init; }

    /// <summary>
    /// 2-letter State code.
    /// </summary>
    [JsonPropertyName("region")]
    [MinLength(1)]
    public required string? Region { get; init; }

    /// <summary>
    /// Zip or Postal code (max 7 characters).
    /// </summary>
    [JsonPropertyName("postal_code")]
    [MinLength(1)]
    public required string? PostalCode { get; init; }

    [JsonPropertyName("country")]
    public required Country? Country { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
