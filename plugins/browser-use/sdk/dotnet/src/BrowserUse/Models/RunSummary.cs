using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;
using BrowserUse.Models.Enums;

namespace BrowserUse.Models;

public record RunSummary
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("task")]
    public required string Task { get; init; }

    [JsonPropertyName("title")]
    public required Title Title { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modelParams")]
    public Modelparams? ModelParams { get; init; }

    [JsonPropertyName("contextLimit")]
    public required int ContextLimit { get; init; }

    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("result")]
    public required Result Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public Output? Output { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputSchema")]
    public Outputschema? OutputSchema { get; init; }

    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonPropertyName("sessionId")]
    public required Guid SessionId { get; init; }

    [JsonPropertyName("workspaceId")]
    public required Workspaceid WorkspaceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachedFileIds")]
    public Attachedfileids? AttachedFileIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("judgement")]
    public Judgement? Judgement { get; init; }

    [JsonPropertyName("totalInputTokens")]
    public required int TotalInputTokens { get; init; }

    [JsonPropertyName("totalOutputTokens")]
    public required int TotalOutputTokens { get; init; }

    [JsonPropertyName("totalCostUsd")]
    public required string TotalCostUsd { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
