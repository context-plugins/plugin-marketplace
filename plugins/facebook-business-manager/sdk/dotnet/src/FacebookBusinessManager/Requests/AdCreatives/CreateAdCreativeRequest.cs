using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.AdCreatives;

/// <summary>
/// The inputs of the CreateAdCreative operation.
/// </summary>
public sealed record CreateAdCreativeRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    public required AdCreativeCreate Body { get; init; }
}
