using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;
using Instacart.Models.Enums;

namespace Instacart.Models;

public record SubmissionResponse
{
    /// <summary>
    /// A unique identifier for tracking the submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submission_id")]
    public string? SubmissionId { get; init; }

    /// <summary>
    /// The current status of the submission.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusInstacartCatalogItemsApi? Status { get; init; }

    /// <summary>
    /// The number of records submitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submitted_count")]
    public int? SubmittedCount { get; init; }

    /// <summary>
    /// Any validation errors found in the submitted data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<Error1>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
