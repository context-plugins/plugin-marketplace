using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowV1TriggerResponse
{
    /// <summary>
    /// Console URL for the started CloudFlow execution history entry.
    /// </summary>
    [JsonPropertyName("executionLink")]
    public required string ExecutionLink { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
