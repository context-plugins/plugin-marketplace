using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListEndpointAttachments method.
/// </summary>
public record GoogleCloudApigeeV1ListEndpointAttachmentsResponse
{
    /// <summary>
    /// Page token that you can include in an <c>ListEndpointAttachments</c> request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// Endpoint attachments in the specified organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointAttachments")]
    public IReadOnlyList<GoogleCloudApigeeV1EndpointAttachment>? EndpointAttachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
