using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for BufferTask.
/// </summary>
public record BufferTaskRequest
{
    /// <summary>
    /// Optional. Body of the HTTP request. The body can take any generic value. The value is written to the HttpRequest of the [Task].
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public HttpBody1? Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
