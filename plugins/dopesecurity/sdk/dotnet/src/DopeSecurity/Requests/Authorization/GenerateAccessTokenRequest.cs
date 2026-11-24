using DopeSecurity.Models;

namespace DopeSecurity.Requests.Authorization;

/// <summary>
/// The inputs of the GenerateAccessToken operation.
/// </summary>
public sealed record GenerateAccessTokenRequest
{
    public required PartnerOauthTokenRequest Body { get; init; }
}
