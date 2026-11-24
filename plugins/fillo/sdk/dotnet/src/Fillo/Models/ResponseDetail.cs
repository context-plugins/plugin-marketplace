using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ResponseDetail
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("formId")]
    public required string FormId { get; init; }

    /// <summary>
    /// Answers keyed by field id.
    /// </summary>
    [JsonPropertyName("data")]
    public required object Data { get; init; }

    /// <summary>
    /// Submission metadata incl. the respondent snapshot.
    /// </summary>
    [JsonPropertyName("meta")]
    public required object? Meta { get; init; }

    [JsonPropertyName("formVersionId")]
    public required string? FormVersionId { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    [JsonPropertyName("files")]
    public required IReadOnlyList<File> Files { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
