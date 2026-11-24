namespace Instagram.Requests.MediaApi;

/// <summary>
/// The inputs of the GetMediaChildren operation.
/// </summary>
public sealed record GetMediaChildrenRequest
{
    public required string MediaId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
