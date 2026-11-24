using DoiT.Core.Validation.Attributes;

namespace DoiT.Requests.Alerts;

/// <summary>
/// The inputs of the ListAlertSlackChannels operation.
/// </summary>
public sealed record ListAlertSlackChannelsRequest
{
    public string? NameContains { get; init; }

    [Minimum(1)]
    [Maximum(500)]
    public int MaxResults { get; init; } = 50;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
