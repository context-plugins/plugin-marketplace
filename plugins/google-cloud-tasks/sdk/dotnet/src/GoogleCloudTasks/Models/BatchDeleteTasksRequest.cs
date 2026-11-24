using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for deleting a batch of tasks using BatchDeleteTasks.
/// </summary>
public record BatchDeleteTasksRequest
{
    /// <summary>
    /// Optional. This field will be used to identify the long running operation, avoiding duplication when user retries. If not provided, then a UUID will be generated at server side.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Required. The names of the tasks to delete. A maximum of 1000 tasks can be deleted in a batch. For example: Format: <c>projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("names")]
    public IReadOnlyList<string>? Names { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
