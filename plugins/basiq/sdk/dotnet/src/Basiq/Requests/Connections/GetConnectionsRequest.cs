namespace Basiq.Requests.Connections;

/// <summary>
/// The inputs of the GetConnections operation.
/// </summary>
public sealed record GetConnectionsRequest
{
    /// <summary>
    /// User identifier.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// Connections filters, id, status, institution.id. e.g institution.id.eq('AU00000')
    /// </summary>
    public string? Filter { get; init; }
}
