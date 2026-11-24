using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for [BatchCreateTasks].
/// </summary>
public record BatchCreateTasksRequest
{
    /// <summary>
    /// Required. The list of requests to create tasks. The queue specified in parent field of each CreateTaskRequest will be the same. This validation happens on the client side as well as in the handler. BatchCreateTasksRequest.parent will also be the same value as the individual <c>CreateTaskRequest.parent</c>. The maximum number of requests is 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requests")]
    public IReadOnlyList<CreateTaskRequest>? Requests { get; init; }

    /// <summary>
    /// Optional. This field will be used to identify the long running operation, avoiding duplication when user retries. If not provided, then a UUID will be generated at server side.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
