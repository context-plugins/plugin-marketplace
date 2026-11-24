using Hud.Models;

namespace Hud.Requests.MemberSecrets;

/// <summary>
/// The inputs of the CreateMemberSecretV2MemberSecretsPost operation.
/// </summary>
public sealed record CreateMemberSecretV2MemberSecretsPostRequest
{
    public required MemberSecretCreateRequest Body { get; init; }
}
