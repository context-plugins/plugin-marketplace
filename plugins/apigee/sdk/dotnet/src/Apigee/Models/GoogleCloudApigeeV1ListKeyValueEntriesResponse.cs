using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The request structure for listing key value map keys and its corresponding values.
/// </summary>
public record GoogleCloudApigeeV1ListKeyValueEntriesResponse
{
    /// <summary>
    /// One or more key value map keys and values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyValueEntries")]
    public IReadOnlyList<GoogleCloudApigeeV1KeyValueEntry>? KeyValueEntries { get; init; }

    /// <summary>
    /// Token that can be sent as <c>next_page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
