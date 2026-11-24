using System;

namespace Hud.Requests.MemberSecrets;

/// <summary>
/// The inputs of the DeleteMemberSecretV2MemberSecretsSecretIdDelete operation.
/// </summary>
public sealed record DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest
{
    public required Guid SecretId { get; init; }
}
