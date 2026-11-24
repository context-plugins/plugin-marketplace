using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.CustomAudiences;

/// <summary>
/// The inputs of the CreateCustomAudience operation.
/// </summary>
public sealed record CreateCustomAudienceRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    public required CustomAudienceCreate Body { get; init; }
}
