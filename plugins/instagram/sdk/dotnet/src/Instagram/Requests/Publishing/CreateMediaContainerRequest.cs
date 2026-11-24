using Instagram.Models;

namespace Instagram.Requests.Publishing;

/// <summary>
/// The inputs of the CreateMediaContainer operation.
/// </summary>
public sealed record CreateMediaContainerRequest
{
    public required string UserId { get; init; }

    public required CreateContainerRequest Body { get; init; }
}
