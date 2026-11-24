using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Modifies HTTP target for HTTP tasks.
/// </summary>
public record HttpTarget2
{
    /// <summary>
    /// If specified, an <see href="https://developers.google.com/identity/protocols/OpenIDConnect">OIDC</see> token is generated and attached as an <c>Authorization</c> header in the HTTP request. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself. Note that both the service account email and the audience MUST be specified when using the queue-level authorization override.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oidcToken")]
    public OidcToken2? OidcToken { get; init; }

    /// <summary>
    /// URI override. When specified, overrides the execution URI for all the tasks in the queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uriOverride")]
    public UriOverride2? UriOverride { get; init; }

    /// <summary>
    /// If specified, an <see href="https://developers.google.com/identity/protocols/OAuth2">OAuth token</see> is generated and attached as the <c>Authorization</c> header in the HTTP request. This type of authorization should generally be used only when calling Google APIs hosted on *.googleapis.com. Note that both the service account email and the scope MUST be specified when using the queue-level authorization override.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oauthToken")]
    public OAuthToken1? OauthToken { get; init; }

    /// <summary>
    /// The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at execution time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpMethod")]
    public HttpMethod2? HttpMethod { get; init; }

    /// <summary>
    /// HTTP target headers. This map contains the header field names and values. Headers will be set when running the CreateTask and/or BufferTask. These headers represent a subset of the headers that will be configured for the task's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Several predefined headers, prefixed with "X-CloudTasks-", can be used to define properties of the task. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. <c>Content-Type</c> won't be set by Cloud Tasks. You can explicitly set <c>Content-Type</c> to a media type when the task is created. For example, <c>Content-Type</c> can be set to <c>"application/octet-stream"</c> or <c>"application/json"</c>. The default value is set to <c>"application/json"</c>. * User-Agent: This will be set to <c>"Google-Cloud-Tasks"</c>. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB. Queue-level headers to override headers of all the tasks in the queue. Do not put business sensitive or personally identifying data in the HTTP Header Override Configuration or other similar fields in accordance with Section 12 (Resource Fields) of the <see href="https://cloud.google.com/terms/service-terms">Service Specific Terms</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headerOverrides")]
    public IReadOnlyList<HeaderOverride>? HeaderOverrides { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
