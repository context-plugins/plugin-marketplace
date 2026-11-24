using Instagram.Models;

namespace Instagram.Requests.Publishing;

/// <summary>
/// The inputs of the PublishMedia operation.
/// </summary>
public sealed record PublishMediaRequest
{
    public required string UserId { get; init; }

    public required MediaPublishRequest Body { get; init; }
}
