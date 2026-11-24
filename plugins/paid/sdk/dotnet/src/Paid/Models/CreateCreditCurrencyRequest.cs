using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreateCreditCurrencyRequest
{
    /// <summary>
    /// Human-readable name shown for this credit currency.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Stable machine-readable key for this credit currency. Use lowercase letters, numbers, underscores, and hyphens. Keys are unique within an organization.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Optional description for this credit currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
