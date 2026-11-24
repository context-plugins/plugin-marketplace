using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Optional. Body of the HTTP request. The body can take any generic value. The value is written to the HttpRequest of the [Task].
/// </summary>
public record HttpBody1
{
    /// <summary>
    /// Application specific response metadata. Must be set in the first response for streaming APIs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extensions")]
    public IReadOnlyList<object>? Extensions { get; init; }

    /// <summary>
    /// The HTTP request/response body as raw binary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public string? Data { get; init; }

    /// <summary>
    /// The HTTP Content-Type header value specifying the content type of the body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    public string? ContentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
