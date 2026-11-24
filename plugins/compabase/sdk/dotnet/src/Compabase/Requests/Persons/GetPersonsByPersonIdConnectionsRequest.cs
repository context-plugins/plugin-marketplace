using System;

namespace Compabase.Requests.Persons;

/// <summary>
/// The inputs of the GetPersonsByPersonIdConnections operation.
/// </summary>
public sealed record GetPersonsByPersonIdConnectionsRequest
{
    /// <summary>
    /// UUID of the person; obtained from <c>GET /persons/search</c>.
    /// </summary>
    public required Guid PersonId { get; init; }
}
