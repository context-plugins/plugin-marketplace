using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Additional information for the API invocation, such as the request tracking id.
/// </summary>
public record ResponseMetadata1
{
    /// <summary>
    /// A unique id associated with this call. This id is logged for tracking purposes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
