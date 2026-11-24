using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Response of auto-complete query.
/// </summary>
public record CompleteQueryResponse
{
    /// <summary>
    /// Results of the matching job/company candidates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completionResults")]
    public IReadOnlyList<CompletionResult>? CompletionResults { get; init; }

    /// <summary>
    /// Additional information for the API invocation, such as the request tracking id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public ResponseMetadata1? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
