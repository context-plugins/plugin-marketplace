namespace Instagram.Requests.MediaApi;

/// <summary>
/// The inputs of the DeleteMedia operation.
/// </summary>
public sealed record DeleteMediaRequest
{
    public required string MediaId { get; init; }

    public required string AccessToken { get; init; }
}
