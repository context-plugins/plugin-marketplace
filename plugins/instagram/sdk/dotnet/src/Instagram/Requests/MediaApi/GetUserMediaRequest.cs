namespace Instagram.Requests.MediaApi;

/// <summary>
/// The inputs of the GetUserMedia operation.
/// </summary>
public sealed record GetUserMediaRequest
{
    /// <summary>
    /// The Instagram user ID.
    /// </summary>
    public required string UserId { get; init; }

    public required string AccessToken { get; init; }

    /// <summary>
    /// Comma-separated list of fields.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Maximum number of results per page.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Cursor for pagination.
    /// </summary>
    public string? After { get; init; }
}
