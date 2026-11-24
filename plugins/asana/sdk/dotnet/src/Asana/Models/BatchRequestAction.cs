using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

/// <summary>
/// An action object for use in a batch request.
/// </summary>
public record BatchRequestAction
{
    /// <summary>
    /// The path of the desired endpoint relative to the API’s base URL. Query parameters are not accepted here; put them in <c>data</c> instead.
    /// </summary>
    [JsonPropertyName("relative_path")]
    public required string RelativePath { get; init; }

    /// <summary>
    /// The HTTP method you wish to emulate for the action.
    /// </summary>
    [JsonPropertyName("method")]
    public required Method Method { get; init; }

    /// <summary>
    /// For <c>GET</c> requests, this should be a map of query parameters you would have normally passed in the URL. Options and pagination are not accepted here; put them in <c>options</c> instead. For <c>POST</c>, <c>PATCH</c>, and <c>PUT</c> methods, this should be the content you would have normally put in the data field of the body.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    /// <summary>
    /// Pagination (<c>limit</c> and <c>offset</c>) and output options (<c>fields</c> or <c>expand</c>) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public Options? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
