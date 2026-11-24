using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([<c>200</c> - <c>299</c>]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns <c>429</c> (Too Many Requests), <c>503</c> (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the <c>Retry-After</c> HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).
/// </summary>
public record HttpRequest
{
    /// <summary>
    /// The HTTP method to use for the request. The default is POST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpMethod")]
    public HttpMethodEnum? HttpMethod { get; init; }

    /// <summary>
    /// If specified, an <see href="https://developers.google.com/identity/protocols/OpenIDConnect">OIDC</see> token will be generated and attached as an <c>Authorization</c> header in the HTTP request. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oidcToken")]
    public OidcToken3? OidcToken { get; init; }

    /// <summary>
    /// If specified, an <see href="https://developers.google.com/identity/protocols/OAuth2">OAuth token</see> will be generated and attached as an <c>Authorization</c> header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthToken")]
    public OAuthToken3? OauthToken { get; init; }

    /// <summary>
    /// HTTP request headers. This map contains the header field names and values. Headers can be set when the task is created. These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. * User-Agent: This will be set to <c>"Google-Cloud-Tasks"</c>. * <c>X-Google-*</c>: Google use only. * <c>X-AppEngine-*</c>: Google use only. <c>Content-Type</c> won't be set by Cloud Tasks. You can explicitly set <c>Content-Type</c> to a media type when the task is created. For example, <c>Content-Type</c> can be set to <c>"application/octet-stream"</c> or <c>"application/json"</c>. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// Required. The full url path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples are: <c>http://acme.com</c> and <c>https://acme.com/sales:8080</c>. Cloud Tasks will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding. The <c>Location</c> header response from a redirect response [<c>300</c> - <c>399</c>] may be followed. The redirect is not counted as a separate attempt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a task with an incompatible HttpMethod.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
