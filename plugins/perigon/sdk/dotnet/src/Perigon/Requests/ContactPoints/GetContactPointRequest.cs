using System;

namespace Perigon.Requests.ContactPoints;

/// <summary>
/// The inputs of the GetContactPoint operation.
/// </summary>
public sealed record GetContactPointRequest
{
    public required Guid Uuid { get; init; }
}
