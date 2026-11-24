using JuriSign.Models;

namespace JuriSign.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the CreateToken operation.
/// </summary>
public sealed record CreateTokenRequest
{
    public required AuthTokenRequest Body { get; init; }
}
