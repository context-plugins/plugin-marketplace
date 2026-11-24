using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for CreateTask.
/// </summary>
public record CreateTaskRequest
{
    /// <summary>
    /// The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires <c>cloudtasks.tasks.fullView</c> <see href="https://cloud.google.com/iam/">Google IAM</see> permission on the Task resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseView")]
    public ResponseView? ResponseView { get; init; }

    /// <summary>
    /// Required. The queue name. For example: <c>projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID</c> The queue must already exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public string? Parent { get; init; }

    /// <summary>
    /// Required. The task to add. Task names have the following format: <c>projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID</c>. The user can optionally specify a task name. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response. If schedule_time is not set or is in the past then Cloud Tasks will set it to the current time. Task De-duplication: Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with ALREADY_EXISTS. The IDs of deleted tasks are not immediately available for reuse. It can take up to 24 hours (or 9 days if the task's queue was created using a queue.yaml or queue.xml) for the task ID to be released and made available again. Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task")]
    public Task2? Task { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
