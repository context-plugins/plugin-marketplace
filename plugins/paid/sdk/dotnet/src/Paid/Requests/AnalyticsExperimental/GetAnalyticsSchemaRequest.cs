namespace Paid.Requests.AnalyticsExperimental;

/// <summary>
/// The inputs of the GetAnalyticsSchema operation.
/// </summary>
public sealed record GetAnalyticsSchemaRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
