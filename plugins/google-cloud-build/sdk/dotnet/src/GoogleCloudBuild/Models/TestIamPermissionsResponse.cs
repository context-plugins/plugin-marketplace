using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Response message for <c>TestIamPermissions</c> method.
/// </summary>
public record TestIamPermissionsResponse
{
    /// <summary>
    /// A subset of <c>TestPermissionsRequest.permissions</c> that the caller is allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    public IReadOnlyList<string>? Permissions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
