using System.Collections.Generic;

namespace DevCycle.Requests.DeprecatedFeaturesV1;

/// <summary>
/// The inputs of the FeaturesControllerCreateMultipleV1 operation.
/// </summary>
public sealed record FeaturesControllerCreateMultipleV1Request
{
    /// <summary>
    /// A Project key or ID
    /// </summary>
    public required string Project { get; init; }

    public required IReadOnlyList<string> Body { get; init; }
}
