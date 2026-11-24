using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// Request message for <c>TestIamPermissions</c> method.
/// </summary>
public record TestIamPermissionsRequest
{
    /// <summary>
    /// The set of permissions to check for the <c>resource</c>. Permissions with wildcards (such as <c>*</c> or <c>storage.*</c>) are not allowed. For more information see <see href="https://cloud.google.com/iam/docs/overview#permissions">IAM Overview</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    public IReadOnlyList<string>? Permissions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
