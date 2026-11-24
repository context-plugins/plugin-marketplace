using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Authorization
{
    /// <summary>
    /// Authorization type identifier
    /// user AuthorizationUser  AuthorizationUser "User" authorization type identifier
    /// token AuthorizationToken AuthorizationToken "Token" authorization type identifier
    /// other AuthorizationOther  AuthorizationOther "Other" authorization type identifier
    /// user-mfa AuthorizationUserMfa  AuthorizationUserMfa "UserMfa" authorization type identifier
    /// user-mfa-intermittent AuthorizationUserMfaIntermittent AuthorizationUserMfaIntermittent "UserMfaIntermittent" authorization type identifier
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public MetaPlatformConnectorsApi? Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
