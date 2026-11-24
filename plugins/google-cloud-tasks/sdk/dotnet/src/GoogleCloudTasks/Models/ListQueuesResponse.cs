using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Response message for ListQueues.
/// </summary>
public record ListQueuesResponse
{
    /// <summary>
    /// A token to retrieve next page of results. To return the next page of results, call ListQueues with this value as the page_token. If the next_page_token is empty, there are no more results. The page token is valid for only 2 hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The list of queues.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queues")]
    public IReadOnlyList<QueueModel>? Queues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
