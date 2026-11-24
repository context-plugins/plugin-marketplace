namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Nobelprizes operation.
/// </summary>
public sealed record NobelprizesRequest
{
    /// <summary>
    /// The first name of the Nobel Prize winner to get information about
    /// </summary>
    public string? Firstname { get; init; }

    /// <summary>
    /// The last name of the Nobel Prize winner to get information about
    /// </summary>
    public string? Lastname { get; init; }

    /// <summary>
    /// The category of the Nobel Prize to get information about
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// The year of the Nobel Prize to get information about
    /// </summary>
    public int? Year { get; init; }
}
