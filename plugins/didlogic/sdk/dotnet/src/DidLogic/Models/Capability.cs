using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record Capability
{
    /// <summary>
    /// HTTP method of the operation
    /// </summary>
    [JsonPropertyName("method")]
    public required Method Method { get; init; }

    /// <summary>
    /// Path of the operation as written in this reference, with path parameters
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
