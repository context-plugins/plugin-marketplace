using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Purse
{
    /// <summary>
    /// The balance available for this additional currency purse.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// The currency for the purse.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
