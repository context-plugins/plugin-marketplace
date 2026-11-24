using PrismaReviews.Models.Enums;

namespace PrismaReviews.Requests.Platforms;

/// <summary>
/// The inputs of the GetPlatform operation.
/// </summary>
public sealed record GetPlatformRequest
{
    /// <summary>
    /// Platform ID.
    /// </summary>
    public required PlatformId Id { get; init; }
}
