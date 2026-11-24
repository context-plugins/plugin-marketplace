using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Models;

/// <summary>
/// URI Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
/// </summary>
public record UriOverride
{
    /// <summary>
    /// Port override. When specified, replaces the port part of the task URI. For instance, for a URI "https://www.example.com/example" and port=123, the overridden URI becomes "https://www.example.com:123/example". Note that the port value must be a positive integer. Setting the port to 0 (Zero) clears the URI port.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public string? Port { get; init; }

    /// <summary>
    /// Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheme")]
    public Scheme? Scheme { get; init; }

    /// <summary>
    /// URI query. When specified, replaces the query part of the task URI. Setting the query value to an empty string clears the URI query segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryOverride")]
    public QueryOverride1? QueryOverride { get; init; }

    /// <summary>
    /// URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uriOverrideEnforceMode")]
    public UriOverrideEnforceMode? UriOverrideEnforceMode { get; init; }

    /// <summary>
    /// URI path. When specified, replaces the existing path of the task URL. Setting the path value to an empty string clears the URI path segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pathOverride")]
    public PathOverride2? PathOverride { get; init; }

    /// <summary>
    /// Host override. When specified, replaces the host part of the task URL. For example, if the task URL is "https://www.google.com," and host value is set to "example.net", the overridden URI will be changed to "https://example.net." Host value cannot be an empty string (INVALID_ARGUMENT).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
