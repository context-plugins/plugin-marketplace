namespace Instagram.Requests.MediaApi;

/// <summary>
/// The inputs of the GetUserStories operation.
/// </summary>
public sealed record GetUserStoriesRequest
{
    public required string UserId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
