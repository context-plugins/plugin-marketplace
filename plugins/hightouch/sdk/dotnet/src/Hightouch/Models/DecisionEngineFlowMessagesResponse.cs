using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record DecisionEngineFlowMessagesResponse
{
    [JsonPropertyName("hasMore")]
    public required bool HasMore { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<DecisionEngineMessage> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
