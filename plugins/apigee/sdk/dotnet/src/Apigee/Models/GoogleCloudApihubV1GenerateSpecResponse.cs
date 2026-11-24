using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for GenerateSpec.
/// </summary>
public record GoogleCloudApihubV1GenerateSpecResponse
{
    /// <summary>
    /// The merged OpenAPI document for the requested window.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generatedSpec")]
    public GoogleCloudApihubV1SpecContents2? GeneratedSpec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
