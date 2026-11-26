using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record TopInsider
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Officer title from the filing; empty when the filer reports as a director only.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("transaction_count")]
    public required int TransactionCount { get; init; }

    /// <summary>
    /// Buys minus sells in USD over the window, as a decimal string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("net_value")]
    public string? NetValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
