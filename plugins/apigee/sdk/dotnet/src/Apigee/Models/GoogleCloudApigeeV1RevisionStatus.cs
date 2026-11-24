using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The status of a specific resource revision.
/// </summary>
public record GoogleCloudApigeeV1RevisionStatus
{
    /// <summary>
    /// The revision of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jsonSpec")]
    public string? JsonSpec { get; init; }

    /// <summary>
    /// The number of replicas that have successfully loaded this revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replicas")]
    public int? Replicas { get; init; }

    /// <summary>
    /// Errors reported when attempting to load this revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public IReadOnlyList<GoogleCloudApigeeV1UpdateError>? Errors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
