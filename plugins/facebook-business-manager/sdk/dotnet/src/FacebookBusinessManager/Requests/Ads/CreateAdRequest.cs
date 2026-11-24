using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Ads;

/// <summary>
/// The inputs of the CreateAd operation.
/// </summary>
public sealed record CreateAdRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    public required AdCreate Body { get; init; }
}
