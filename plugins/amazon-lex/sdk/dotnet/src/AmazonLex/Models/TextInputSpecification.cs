using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TextInputSpecification
{
    /// <summary>
    /// Time for which a bot waits before re-prompting a customer for text input.
    /// </summary>
    [JsonPropertyName("startTimeoutMs")]
    public required int StartTimeoutMs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
