using Divvy.Models;

namespace Divvy.Requests.AuthenticationApi;

/// <summary>
/// The inputs of the Login operation.
/// </summary>
public sealed record LoginRequest
{
    public required LoginRequestDto Body { get; init; }
}
