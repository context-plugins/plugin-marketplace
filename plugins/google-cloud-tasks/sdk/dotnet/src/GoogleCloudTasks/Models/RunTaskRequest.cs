using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for forcing a task to run now using RunTask.
/// </summary>
public record RunTaskRequest
{
    /// <summary>
    /// The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires <c>cloudtasks.tasks.fullView</c> <see href="https://cloud.google.com/iam/">Google IAM</see> permission on the Task resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseView")]
    public ResponseView? ResponseView { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
