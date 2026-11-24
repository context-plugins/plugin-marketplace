using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// A lightweight description of a file.
/// </summary>
public record ApigatewayApiConfigFile
{
    /// <summary>
    /// The bytes that constitute the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public string? Contents { get; init; }

    /// <summary>
    /// The file path (full or relative path). This is typically the path of the file when it is uploaded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
