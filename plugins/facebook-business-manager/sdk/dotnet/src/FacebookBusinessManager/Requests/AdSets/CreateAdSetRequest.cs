using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.AdSets;

/// <summary>
/// The inputs of the CreateAdSet operation.
/// </summary>
public sealed record CreateAdSetRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    public required AdSetCreate Body { get; init; }
}
