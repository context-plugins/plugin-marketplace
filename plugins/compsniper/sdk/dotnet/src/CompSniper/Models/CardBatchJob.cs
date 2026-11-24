using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record CardBatchJob
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobId")]
    public Guid? JobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalCards")]
    public int? TotalCards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processedCards")]
    public int? ProcessedCards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remainingCards")]
    public int? RemainingCards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("succeededCards")]
    public int? SucceededCards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedCards")]
    public int? FailedCards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<CardBatchResult>? Results { get; init; }

    /// <summary>
    /// Present when processing stopped because the account quota was exhausted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgradeUrl")]
    [Format(FormatKind.Uri)]
    public string? UpgradeUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
