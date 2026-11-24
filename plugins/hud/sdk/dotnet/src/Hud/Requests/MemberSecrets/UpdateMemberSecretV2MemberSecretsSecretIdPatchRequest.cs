using System;
using Hud.Models;

namespace Hud.Requests.MemberSecrets;

/// <summary>
/// The inputs of the UpdateMemberSecretV2MemberSecretsSecretIdPatch operation.
/// </summary>
public sealed record UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest
{
    public required Guid SecretId { get; init; }

    public required MemberSecretUpdateRequest Body { get; init; }
}
