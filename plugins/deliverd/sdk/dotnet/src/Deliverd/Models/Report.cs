using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Report
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("workspaceId")]
    public required Guid? WorkspaceId { get; init; }

    [JsonPropertyName("ownerId")]
    public required Guid? OwnerId { get; init; }

    [JsonPropertyName("classification")]
    public required ClassificationDeliverdDevReportsApi Classification { get; init; }

    [JsonPropertyName("status")]
    public required StatusDeliverdDevReportsApi Status { get; init; }

    [JsonPropertyName("isLiving")]
    public required bool IsLiving { get; init; }

    [JsonPropertyName("currentVersion")]
    public required double? CurrentVersion { get; init; }

    [JsonPropertyName("sourceTool")]
    public required string? SourceTool { get; init; }

    [JsonPropertyName("taskId")]
    public required Guid? TaskId { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
