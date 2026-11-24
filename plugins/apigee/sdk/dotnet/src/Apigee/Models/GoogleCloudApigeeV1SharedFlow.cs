using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The metadata describing a shared flow
/// </summary>
public record GoogleCloudApigeeV1SharedFlow
{
    /// <summary>
    /// Optional. The ID of the space associated with this shared flow. Any IAM policies applied to the space will control access to this shared flow. To learn how Spaces can be used to manage resources, read the <see href="https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview">Apigee Spaces Overview</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("space")]
    public string? Space { get; init; }

    /// <summary>
    /// Metadata describing the shared flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metaData")]
    public GoogleCloudApigeeV1EntityMetadata1? MetaData { get; init; }

    /// <summary>
    /// The ID of the shared flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A list of revisions of this shared flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public IReadOnlyList<string>? Revision { get; init; }

    /// <summary>
    /// The id of the most recently created revision for this shared flow.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestRevisionId")]
    public string? LatestRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
