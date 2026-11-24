using System;

namespace Hud.Requests.ByokCredentials;

/// <summary>
/// The inputs of the DeleteByokCredentialV2ByokCredentialsCredentialIdDelete operation.
/// </summary>
public sealed record DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest
{
    public required Guid CredentialId { get; init; }
}
