using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// A size-bounded debugging prompt for a trace, ready to paste into a coding agent.
/// </summary>
public record TraceAnalysisPromptResponse
{
    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonPropertyName("prompt")]
    public required string Prompt { get; init; }

    [JsonPropertyName("truncated")]
    public required bool Truncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
