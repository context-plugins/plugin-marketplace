using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The FetchAdditionalSpecContent method's response.
/// </summary>
public record GoogleCloudApihubV1FetchAdditionalSpecContentResponse
{
    /// <summary>
    /// The additional spec content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalSpecContent")]
    public GoogleCloudApihubV1AdditionalSpecContent1? AdditionalSpecContent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
