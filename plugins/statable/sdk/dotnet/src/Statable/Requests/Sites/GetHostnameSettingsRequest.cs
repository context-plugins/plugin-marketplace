namespace Statable.Requests.Sites;

/// <summary>
/// The inputs of the GetHostnameSettings operation.
/// </summary>
public sealed record GetHostnameSettingsRequest
{
    public required long Id { get; init; }
}
