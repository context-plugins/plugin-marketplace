namespace Instagram.Requests.Hashtags;

/// <summary>
/// The inputs of the GetHashtagRecentMedia operation.
/// </summary>
public sealed record GetHashtagRecentMediaRequest
{
    public required string HashtagId { get; init; }

    public required string UserId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
