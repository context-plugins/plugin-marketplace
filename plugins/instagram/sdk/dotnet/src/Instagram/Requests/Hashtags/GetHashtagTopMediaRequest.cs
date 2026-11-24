namespace Instagram.Requests.Hashtags;

/// <summary>
/// The inputs of the GetHashtagTopMedia operation.
/// </summary>
public sealed record GetHashtagTopMediaRequest
{
    public required string HashtagId { get; init; }

    public required string UserId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
