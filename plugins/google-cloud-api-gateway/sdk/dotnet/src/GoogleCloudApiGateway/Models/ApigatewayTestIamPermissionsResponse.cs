using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudApiGateway.Core.Models;

namespace GoogleCloudApiGateway.Models;

/// <summary>
/// Response message for <c>TestIamPermissions</c> method.
/// </summary>
public record ApigatewayTestIamPermissionsResponse
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
