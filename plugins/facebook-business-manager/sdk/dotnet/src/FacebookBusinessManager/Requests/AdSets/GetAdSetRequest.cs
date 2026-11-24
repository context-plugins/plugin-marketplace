namespace FacebookBusinessManager.Requests.AdSets;

/// <summary>
/// The inputs of the GetAdSet operation.
/// </summary>
public sealed record GetAdSetRequest
{
    /// <summary>
    /// The ID of the ad set
    /// </summary>
    public required string AdSetId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. If omitted, default fields are returned.
    /// </summary>
    public string? Fields { get; init; }
}
