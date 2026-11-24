using Hud.Models;

namespace Hud.Requests.ByokCredentials;

/// <summary>
/// The inputs of the CreateByokCredentialV2ByokCredentialsPost operation.
/// </summary>
public sealed record CreateByokCredentialV2ByokCredentialsPostRequest
{
    public required ByokCredentialCreateRequest Body { get; init; }
}
