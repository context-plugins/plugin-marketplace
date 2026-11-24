namespace Instagram.Requests.Users;

/// <summary>
/// The inputs of the GetUser operation.
/// </summary>
public sealed record GetUserRequest
{
    /// <summary>
    /// The Instagram user ID.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// User access token.
    /// </summary>
    public required string AccessToken { get; init; }

    /// <summary>
    /// Comma-separated list of fields to return.
    /// </summary>
    public string? Fields { get; init; }
}
