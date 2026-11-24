using System;
using Perigon.Models;

namespace Perigon.Requests.ContactPoints;

/// <summary>
/// The inputs of the UpdateContactPoint operation.
/// </summary>
public sealed record UpdateContactPointRequest
{
    public required Guid Uuid { get; init; }

    public required ContactPointUpdateBody Body { get; init; }
}
