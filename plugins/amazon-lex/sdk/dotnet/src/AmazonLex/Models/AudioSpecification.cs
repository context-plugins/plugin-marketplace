using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AudioSpecification
{
    /// <summary>
    /// Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
    /// </summary>
    [JsonPropertyName("maxLengthMs")]
    public required int MaxLengthMs { get; init; }

    /// <summary>
    /// Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
    /// </summary>
    [JsonPropertyName("endTimeoutMs")]
    public required int EndTimeoutMs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
