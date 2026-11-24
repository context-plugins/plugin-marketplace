using Perigon.Models;

namespace Perigon.Requests.ContactPoints;

/// <summary>
/// The inputs of the CreateContactPoint operation.
/// </summary>
public sealed record CreateContactPointRequest
{
    public required ContactPointRequestBody Body { get; init; }
}
