namespace DevCycle.Requests.FeatureOptIn;

/// <summary>
/// The inputs of the GetV1OptInConfig operation.
/// </summary>
public sealed record GetV1OptInConfigRequest
{
    /// <summary>
    /// Unique id to identify the user
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set.
    /// </summary>
    public string? SdkKey { get; init; }
}
