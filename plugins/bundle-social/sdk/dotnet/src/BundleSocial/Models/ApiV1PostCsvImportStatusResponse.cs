using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1PostCsvImportStatusResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("status")]
    public required StatusBundleSocialPostCsvApi Status { get; init; }

    [JsonPropertyName("totalRows")]
    public required double TotalRows { get; init; }

    [JsonPropertyName("processedRows")]
    public required double ProcessedRows { get; init; }

    [JsonPropertyName("successRows")]
    public required double SuccessRows { get; init; }

    [JsonPropertyName("failedRows")]
    public required double FailedRows { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    public DateTimeOffset? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedAt")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
