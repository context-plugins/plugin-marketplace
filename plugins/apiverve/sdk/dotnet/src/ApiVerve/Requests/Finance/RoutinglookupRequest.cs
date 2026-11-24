namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Routinglookup operation.
/// </summary>
public sealed record RoutinglookupRequest
{
    /// <summary>
    /// The routing number to lookup information about
    /// </summary>
    public required string Routing { get; init; }
}
