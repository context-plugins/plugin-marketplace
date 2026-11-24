using CircleCi.Models;

namespace CircleCi.Requests.ResourceClassApi;

/// <summary>
/// The inputs of the CreateResourceClass operation.
/// </summary>
public sealed record CreateResourceClassRequest
{
    public required RunnerResourceClassRequest Body { get; init; }
}
