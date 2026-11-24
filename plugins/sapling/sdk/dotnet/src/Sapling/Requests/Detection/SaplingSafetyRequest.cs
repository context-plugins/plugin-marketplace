using Sapling.Models.AnyOf;

namespace Sapling.Requests.Detection;

/// <summary>
/// The inputs of the SaplingSafety operation.
/// </summary>
public sealed record SaplingSafetyRequest
{
    public required ApiV1SafetyRequest2 Body { get; init; }
}
