namespace UiPath.Requests.Discovery;

/// <summary>
/// The inputs of the ListProjects operation.
/// </summary>
public sealed record ListProjectsRequest
{
    /// <summary>
    /// API version to use for this request
    /// </summary>
    public string ApiVersion { get; init; } = "1";
}
