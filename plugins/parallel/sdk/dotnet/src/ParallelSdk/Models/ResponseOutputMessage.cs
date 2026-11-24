using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// An assistant message produced by the model.
/// </summary>
public record ResponseOutputMessage
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("content")]
    public required IReadOnlyList<ResponseOutputText> Content { get; init; }

    [JsonPropertyName("role")]
    public string Role { get; } = "assistant";

    [JsonPropertyName("status")]
    public required StatusParallelAiResponsesApi Status { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "message";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public Phase1? Phase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
