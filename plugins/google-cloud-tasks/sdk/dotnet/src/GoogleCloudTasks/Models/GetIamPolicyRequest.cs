using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for <c>GetIamPolicy</c> method.
/// </summary>
public record GetIamPolicyRequest
{
    /// <summary>
    /// OPTIONAL: A <c>GetPolicyOptions</c> object for specifying options to <c>GetIamPolicy</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public GetPolicyOptions1? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
