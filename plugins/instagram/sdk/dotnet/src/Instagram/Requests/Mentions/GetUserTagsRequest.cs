namespace Instagram.Requests.Mentions;

/// <summary>
/// The inputs of the GetUserTags operation.
/// </summary>
public sealed record GetUserTagsRequest
{
    public required string UserId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
