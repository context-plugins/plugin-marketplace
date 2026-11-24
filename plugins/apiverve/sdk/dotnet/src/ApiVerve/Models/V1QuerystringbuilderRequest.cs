using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1QuerystringbuilderRequest
{
    /// <summary>
    /// JSON object of parameters
    /// </summary>
    [JsonPropertyName("params")]
    public required string Params { get; init; }

    /// <summary>
    /// URL encode parameter values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encode")]
    public bool? Encode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
