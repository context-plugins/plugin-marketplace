using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. Object describing where in the file the issue was found.
/// </summary>
public record GoogleCloudApihubV1Range2
{
    /// <summary>
    /// Required. Start of the issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start")]
    public GoogleCloudApihubV1Point3? Start { get; init; }

    /// <summary>
    /// Required. End of the issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end")]
    public GoogleCloudApihubV1Point1? End { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
