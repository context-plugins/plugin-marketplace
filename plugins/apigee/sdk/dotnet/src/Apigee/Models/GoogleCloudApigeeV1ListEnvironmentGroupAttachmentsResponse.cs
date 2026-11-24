using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListEnvironmentGroupAttachments.
/// </summary>
public record GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse
{
    /// <summary>
    /// Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// EnvironmentGroupAttachments for the specified environment group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentGroupAttachments")]
    public IReadOnlyList<GoogleCloudApigeeV1EnvironmentGroupAttachment>? EnvironmentGroupAttachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
