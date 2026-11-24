using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Request for GenerateSpec.
/// </summary>
public record GoogleCloudApihubV1GenerateSpecRequest
{
    /// <summary>
    /// Required. The observation window. The server quantizes to day boundaries and caps the span at 90 days.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("observationWindow")]
    public GoogleTypeInterval1ApigeeProjectsApi? ObservationWindow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
