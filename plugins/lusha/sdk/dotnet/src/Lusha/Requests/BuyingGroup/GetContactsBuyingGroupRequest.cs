using Lusha.Models;

namespace Lusha.Requests.BuyingGroup;

/// <summary>
/// The inputs of the GetContactsBuyingGroup operation.
/// </summary>
public sealed record GetContactsBuyingGroupRequest
{
    public required V3BuyingGroupRequest Body { get; init; }
}
