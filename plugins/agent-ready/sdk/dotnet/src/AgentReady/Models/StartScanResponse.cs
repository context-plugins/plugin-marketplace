using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Async-job acknowledgement returned with 202.
/// </summary>
public record StartScanResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Lifecycle state of a scan. Poll until status is 'completed' or 'failed'.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusAgentReadyScansApi Status { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("pollUrl")]
    public required string PollUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
