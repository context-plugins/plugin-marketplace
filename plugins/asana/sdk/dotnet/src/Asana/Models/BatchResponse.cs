using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A response object returned from a batch request.
/// </summary>
public record BatchResponse
{
    /// <summary>
    /// The HTTP status code that the invoked endpoint returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status_code")]
    public int? StatusCode { get; init; }

    /// <summary>
    /// A map of HTTP headers specific to this result. This is primarily used for returning a <c>Location</c> header to accompany a <c>201 Created</c> result.  The parent HTTP response will contain all common headers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public object? Headers { get; init; }

    /// <summary>
    /// The JSON body that the invoked endpoint returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public object? Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
