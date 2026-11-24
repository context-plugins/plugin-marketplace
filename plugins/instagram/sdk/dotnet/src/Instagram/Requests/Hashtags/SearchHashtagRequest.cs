namespace Instagram.Requests.Hashtags;

/// <summary>
/// The inputs of the SearchHashtag operation.
/// </summary>
public sealed record SearchHashtagRequest
{
    /// <summary>
    /// The hashtag to search for (without
    /// </summary>
    public required string Q { get; init; }

    /// <summary>
    /// The ID of the user making the request.
    /// </summary>
    public required string UserId { get; init; }

    public required string AccessToken { get; init; }
}
