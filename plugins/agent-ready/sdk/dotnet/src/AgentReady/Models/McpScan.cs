using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Full MCP server scan result: the M-series checks plus a weighted mcpScore (0–100). Independent of the site Vercel score.
/// </summary>
public record McpScan
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("shareToken")]
    public required string ShareToken { get; init; }

    [JsonPropertyName("endpoint")]
    [Format(FormatKind.Uri)]
    public required string Endpoint { get; init; }

    [JsonPropertyName("host")]
    public required string Host { get; init; }

    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    [JsonPropertyName("mcpScore")]
    [Minimum(0)]
    [Maximum(100)]
    public required int McpScore { get; init; }

    /// <summary>
    /// Coarse rating bucket derived from the Vercel Agent Readability score.
    /// </summary>
    [JsonPropertyName("mcpRating")]
    public required McpRating McpRating { get; init; }

    [JsonPropertyName("serverName")]
    public required string? ServerName { get; init; }

    [JsonPropertyName("serverVersion")]
    public required string? ServerVersion { get; init; }

    [JsonPropertyName("toolCount")]
    public required int? ToolCount { get; init; }

    [JsonPropertyName("resourceCount")]
    public required int? ResourceCount { get; init; }

    [JsonPropertyName("promptCount")]
    public required int? PromptCount { get; init; }

    [JsonPropertyName("checks")]
    public required IReadOnlyList<CheckResult> Checks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
