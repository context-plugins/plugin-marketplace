using System;
using Hud.Models;

namespace Hud.Requests.ByokCredentials;

/// <summary>
/// The inputs of the UpdateByokCredentialV2ByokCredentialsCredentialIdPatch operation.
/// </summary>
public sealed record UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest
{
    public required Guid CredentialId { get; init; }

    public required ByokCredentialUpdateRequest Body { get; init; }
}
