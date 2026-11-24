using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AudioAndDtmfInputSpecification
{
    /// <summary>
    /// Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.
    /// </summary>
    [JsonPropertyName("startTimeoutMs")]
    public required int StartTimeoutMs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioSpecification")]
    public AudioSpecification? AudioSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dtmfSpecification")]
    public DtmfSpecification? DtmfSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
