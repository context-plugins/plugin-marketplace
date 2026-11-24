using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1JsontojsonpRequest
{
    /// <summary>
    /// The JSON data you want converted into JSONP format. Send it as an object or as a JSON-encoded string.
    /// </summary>
    [JsonPropertyName("json")]
    public required string Json { get; init; }

    /// <summary>
    /// The callback function name to wrap the JSON data. Must be a JavaScript identifier, optionally dotted (e.g. myCallback or window.myCallback).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("callback")]
    public string? Callback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
