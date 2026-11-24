using Instacart.Models;

namespace Instacart.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the GenerateAccessToken operation.
/// </summary>
public sealed record GenerateAccessTokenRequest
{
    public required TokenRequest Body { get; init; }
}
