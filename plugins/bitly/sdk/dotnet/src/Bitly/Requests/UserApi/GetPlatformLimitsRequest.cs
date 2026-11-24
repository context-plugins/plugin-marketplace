namespace Bitly.Requests.UserApi;

/// <summary>
/// The inputs of the GetPlatformLimits operation.
/// </summary>
public sealed record GetPlatformLimitsRequest
{
    /// <summary>
    /// The specific path for which information is requested
    /// </summary>
    public string? Path { get; init; }
}
