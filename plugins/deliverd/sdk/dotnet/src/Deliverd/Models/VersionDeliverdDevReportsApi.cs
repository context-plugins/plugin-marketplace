using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record VersionDeliverdDevReportsApi
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("versionNumber")]
    public required double VersionNumber { get; init; }

    [JsonPropertyName("scanStatus")]
    public required ScanStatus ScanStatus { get; init; }

    [JsonPropertyName("sizeBytes")]
    public required double SizeBytes { get; init; }

    [JsonPropertyName("fileCount")]
    public required double FileCount { get; init; }

    [JsonPropertyName("sourceTool")]
    public required string? SourceTool { get; init; }

    [JsonPropertyName("createdByLabel")]
    public required string? CreatedByLabel { get; init; }

    [JsonPropertyName("changeSummary")]
    public required string? ChangeSummary { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
