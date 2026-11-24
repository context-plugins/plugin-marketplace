using Lusha.Models;

namespace Lusha.Requests.Lookalikes;

/// <summary>
/// The inputs of the PostV3LookalikeContacts operation.
/// </summary>
public sealed record PostV3LookalikeContactsRequest
{
    public required ContactLookalikesRequest2 Body { get; init; }
}
