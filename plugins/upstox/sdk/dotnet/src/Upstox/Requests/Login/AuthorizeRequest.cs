using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.Login;

/// <summary>
/// The inputs of the Authorize operation.
/// </summary>
public sealed record AuthorizeRequest
{
    [MinLength(1)]
    public required string ClientId { get; init; }

    [MinLength(1)]
    public required string RedirectUri { get; init; }

    public string? State { get; init; }

    public string? Scope { get; init; }
}
