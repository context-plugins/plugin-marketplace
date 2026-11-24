using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Requests.Agents;

/// <summary>
/// The inputs of the GetApiV1Agents operation.
/// </summary>
public sealed record GetApiV1AgentsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; }

    public string? Cursor { get; init; }
}
