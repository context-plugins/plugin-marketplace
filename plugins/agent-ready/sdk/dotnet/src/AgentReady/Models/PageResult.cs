using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;

namespace AgentReady.Models;

/// <summary>
/// Per-page check results.
/// </summary>
public record PageResult
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("checks")]
    public required IReadOnlyList<CheckResultAgentReadyScansApi> Checks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
