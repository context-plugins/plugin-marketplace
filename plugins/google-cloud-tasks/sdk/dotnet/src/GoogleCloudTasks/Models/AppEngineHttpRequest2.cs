using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has AppEngineHttpRequest set.
/// </summary>
public record AppEngineHttpRequest2
{
    /// <summary>
    /// Task-level setting for App Engine routing. * If app_engine_routing_override is set on the queue, this value is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appEngineRouting")]
    public AppEngineRouting3? AppEngineRouting { get; init; }

    /// <summary>
    /// HTTP request headers. This map contains the header field names and values. Headers can be set when the task is created. Repeated headers are not supported but a header value can contain commas. Cloud Tasks sets some headers to default values: * <c>User-Agent</c>: By default, this header is <c>"AppEngine-Google; (+http://code.google.com/appengine)"</c>. This header can be modified, but Cloud Tasks will append <c>"AppEngine-Google; (+http://code.google.com/appengine)"</c> to the modified <c>User-Agent</c>. If the task has a body, Cloud Tasks sets the following headers: * <c>Content-Type</c>: By default, the <c>Content-Type</c> header is set to <c>"application/octet-stream"</c>. The default can be overridden by explicitly setting <c>Content-Type</c> to a particular media type when the task is created. For example, <c>Content-Type</c> can be set to <c>"application/json"</c>. * <c>Content-Length</c>: This is computed by Cloud Tasks. This value is output only. It cannot be changed. The headers below cannot be set or overridden: * <c>Host</c> * <c>X-Google-*</c> * <c>X-AppEngine-*</c> In addition, Cloud Tasks sets some headers when the task is dispatched, such as headers containing information about the task; see <see href="https://cloud.google.com/tasks/docs/creating-appengine-handlers#reading_request_headers">request headers</see>. These headers are set only when the task is dispatched, so they are not visible when the task is returned in a Cloud Tasks response. Although there is no specific limit for the maximum number of headers or the size, there is a limit on the maximum size of the Task. For more information, see the CreateTask documentation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// The HTTP method to use for the request. The default is POST. The app's request handler for the task's target URL must be able to handle HTTP requests with this http_method, otherwise the task attempt fails with error code 405 (Method Not Allowed). See <see href="https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler">Writing a push task request handler</see> and the App Engine documentation for your runtime on <see href="https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled">How Requests are Handled</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpMethod")]
    public HttpMethod1? HttpMethod { get; init; }

    /// <summary>
    /// HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It is an error to set a body on a task with an incompatible HttpMethod.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    /// <summary>
    /// The relative URI. The relative URI must begin with "/" and must be a valid HTTP relative URI. It can contain a path and query string arguments. If the relative URI is empty, then the root path "/" will be used. No spaces are allowed, and the maximum length allowed is 2083 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relativeUri")]
    public string? RelativeUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
