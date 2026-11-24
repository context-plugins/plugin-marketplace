using System;

namespace Perigon.Requests.ContactPoints;

/// <summary>
/// The inputs of the DeleteContactPoint operation.
/// </summary>
public sealed record DeleteContactPointRequest
{
    public required Guid Uuid { get; init; }
}
