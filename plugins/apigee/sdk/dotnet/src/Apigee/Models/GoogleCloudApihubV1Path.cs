using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The path details derived from the spec.
/// </summary>
public record GoogleCloudApihubV1Path
{
    /// <summary>
    /// Optional. A short description for the path applicable to all operations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional. Complete path relative to server endpoint. Note: Even though this field is optional, it is required for CreateApiOperation API and we will fail the request if not provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    public string? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
