namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the GetMediaComments operation.
/// </summary>
public sealed record GetMediaCommentsRequest
{
    public required string MediaId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
