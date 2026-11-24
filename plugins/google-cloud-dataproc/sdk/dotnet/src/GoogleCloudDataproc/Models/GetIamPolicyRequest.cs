using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Request message for GetIamPolicy method.
/// </summary>
public record GetIamPolicyRequest
{
    /// <summary>
    /// OPTIONAL: A GetPolicyOptions object for specifying options to GetIamPolicy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public GetPolicyOptions1? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
