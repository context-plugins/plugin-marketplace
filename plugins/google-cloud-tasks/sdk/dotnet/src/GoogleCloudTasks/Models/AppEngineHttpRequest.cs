using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// App Engine HTTP request. The message defines the HTTP request that is sent to an App Engine app when the task is dispatched. Using AppEngineHttpRequest requires <see href="https://cloud.google.com/appengine/docs/admin-api/access-control"><c>appengine.applications.get</c></see> Google IAM permission for the project and the following scope: <c>https://www.googleapis.com/auth/cloud-platform</c> The task will be delivered to the App Engine app which belongs to the same project as the queue. For more information, see <see href="https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed">How Requests are Routed</see> and how routing is affected by <see href="https://cloud.google.com/appengine/docs/python/config/dispatchref">dispatch files</see>. Traffic is encrypted during transport and never leaves Google datacenters. Because this traffic is carried over a communication mechanism internal to Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS). The request to the handler, however, will appear to have used the HTTP protocol. The AppEngineRouting used to construct the URL that the task is delivered to can be set at the queue-level or task-level: * If app_engine_routing_override is set on the queue, this value is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing. The <c>url</c> that the task will be sent to is: * <c>url =</c> host <c>+</c> relative_uri Tasks can be dispatched to secure app handlers, unsecure app handlers, and URIs restricted with <see href="https://cloud.google.com/appengine/docs/standard/python/config/appref"><c>login: admin</c></see>. Because tasks are not run as any user, they cannot be dispatched to URIs restricted with <see href="https://cloud.google.com/appengine/docs/standard/python/config/appref"><c>login: required</c></see> Task dispatches also do not follow redirects. The task attempt has succeeded if the app's request handler returns an HTTP response code in the range [<c>200</c> - <c>299</c>]. The task attempt has failed if the app's handler returns a non-2xx response code or Cloud Tasks does not receive response before the deadline. Failed tasks will be retried according to the retry configuration. <c>503</c> (Service Unavailable) is considered an App Engine system error instead of an application error and will cause Cloud Tasks' traffic congestion control to temporarily throttle the queue's dispatches. Unlike other types of task targets, a <c>429</c> (Too Many Requests) response from an app handler does not cause traffic congestion control to throttle the queue.
/// </summary>
public record AppEngineHttpRequest
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
