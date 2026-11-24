using JuriSign.Models;

namespace JuriSign.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the CreateSandboxToken operation.
/// </summary>
public sealed record CreateSandboxTokenRequest
{
    public required AuthSandboxTokenRequest Body { get; init; }
}
