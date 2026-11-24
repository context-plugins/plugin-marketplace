namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Stateboundaries operation.
/// </summary>
public sealed record StateboundariesRequest
{
    /// <summary>
    /// The 2 Letter State Code (e.g., CA)
    /// </summary>
    public required string State { get; init; }
}
