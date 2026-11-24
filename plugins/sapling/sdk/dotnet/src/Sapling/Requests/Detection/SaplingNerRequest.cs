using Sapling.Models.AnyOf;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingNer operation.
/// </summary>
public sealed record SaplingNerRequest
{
    public required ApiV1NerRequest2 Body { get; init; }
}
