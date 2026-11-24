namespace ApiVerve.Requests.Science;

/// <summary>
/// The inputs of the Starslookup operation.
/// </summary>
public sealed record StarslookupRequest
{
    /// <summary>
    /// The name of the star for which you want to get the data (e.g., Sirius)
    /// </summary>
    public required string Name { get; init; }
}
