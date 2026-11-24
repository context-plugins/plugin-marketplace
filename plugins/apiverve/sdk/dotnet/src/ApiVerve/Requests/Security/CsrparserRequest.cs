using ApiVerve.Models;

namespace ApiVerve.Requests.Security;

/// <summary>
/// The inputs of the Csrparser operation.
/// </summary>
public sealed record CsrparserRequest
{
    public required V1CsrparserRequest Body { get; init; }
}
