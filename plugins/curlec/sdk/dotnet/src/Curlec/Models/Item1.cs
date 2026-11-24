using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record Item1
{
    /// <summary>
    /// Plan display name shown to customers.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Charge amount in paise per billing cycle.
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; init; } = "INR";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
