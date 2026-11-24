using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. Custom curation information for this plugin instance.
/// </summary>
public record GoogleCloudApihubV1CustomCuration1
{
    /// <summary>
    /// Required. The unique name of the curation resource. This will be the name of the curation resource in the format: <c>projects/{project}/locations/{location}/curations/{curation}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("curation")]
    public string? Curation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
