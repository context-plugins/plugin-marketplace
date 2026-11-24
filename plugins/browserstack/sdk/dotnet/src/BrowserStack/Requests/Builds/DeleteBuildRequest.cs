namespace BrowserStack.Requests.Builds;

/// <summary>
/// The inputs of the DeleteBuild operation.
/// </summary>
public sealed record DeleteBuildRequest
{
    public required string BuildId { get; init; }
}
