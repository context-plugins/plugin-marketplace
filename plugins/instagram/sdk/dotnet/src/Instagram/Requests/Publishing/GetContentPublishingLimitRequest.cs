namespace Instagram.Requests.Publishing;

/// <summary>
/// The inputs of the GetContentPublishingLimit operation.
/// </summary>
public sealed record GetContentPublishingLimitRequest
{
    public required string UserId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
