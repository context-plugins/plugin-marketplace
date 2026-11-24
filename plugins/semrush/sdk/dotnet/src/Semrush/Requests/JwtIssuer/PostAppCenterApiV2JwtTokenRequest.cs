using Semrush.Models;

namespace Semrush.Requests.JwtIssuer;

/// <summary>
/// The inputs of the PostAppCenterApiV2JwtToken operation.
/// </summary>
public sealed record PostAppCenterApiV2JwtTokenRequest
{
    public IssuerJwtRequest? Body { get; init; }
}
