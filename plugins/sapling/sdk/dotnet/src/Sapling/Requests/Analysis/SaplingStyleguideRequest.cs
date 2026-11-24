using Sapling.Models.AnyOf;

namespace Sapling.Requests.Analysis;

/// <summary>
/// The inputs of the SaplingStyleguide operation.
/// </summary>
public sealed record SaplingStyleguideRequest
{
    public required ApiV1StyleguideRequest4 Body { get; init; }
}
