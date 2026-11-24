namespace Instagram.Requests.MediaApi;

/// <summary>
/// The inputs of the GetMedia operation.
/// </summary>
public sealed record GetMediaRequest
{
    /// <summary>
    /// The IG Media ID.
    /// </summary>
    public required string MediaId { get; init; }

    public required string AccessToken { get; init; }

    /// <summary>
    /// Comma-separated list of fields.
    /// </summary>
    public string? Fields { get; init; }
}
