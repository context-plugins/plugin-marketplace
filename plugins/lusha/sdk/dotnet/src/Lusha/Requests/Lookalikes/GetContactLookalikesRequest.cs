using Lusha.Models;

namespace Lusha.Requests.Lookalikes;

/// <summary>
/// The inputs of the GetContactLookalikes operation.
/// </summary>
public sealed record GetContactLookalikesRequest
{
    public required ContactLookalikesRequest Body { get; init; }
}
