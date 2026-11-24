using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Response for the /me endpoint.
/// </summary>
public record AuthenticatedUserResponse
{
    /// <summary>
    /// User information in API responses.
    /// </summary>
    [JsonPropertyName("user")]
    public required UserInfo User { get; init; }

    /// <summary>
    /// Workspace information in API responses.
    /// </summary>
    [JsonPropertyName("workspace")]
    public required WorkspaceInfo Workspace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
