namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Countydata operation.
/// </summary>
public sealed record CountydataRequest
{
    /// <summary>
    /// The two letter name of the US state the county is in (e.g., MO)
    /// </summary>
    public required string State { get; init; }

    /// <summary>
    /// The name of the US county to get data about (e.g. Jackson)
    /// </summary>
    public required string County { get; init; }
}
