using System.ComponentModel.DataAnnotations;
using Upstox.Models;

namespace Upstox.Requests.Login;

/// <summary>
/// The inputs of the InitTokenRequestForIndieUser operation.
/// </summary>
public sealed record InitTokenRequestForIndieUserRequest
{
    [MinLength(1)]
    public required string ClientId { get; init; }

    public required IndieUserTokenRequest Body { get; init; }
}
