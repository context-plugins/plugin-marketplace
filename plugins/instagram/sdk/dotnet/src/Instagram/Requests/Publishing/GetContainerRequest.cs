namespace Instagram.Requests.Publishing;

/// <summary>
/// The inputs of the GetContainer operation.
/// </summary>
public sealed record GetContainerRequest
{
    public required string ContainerId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
