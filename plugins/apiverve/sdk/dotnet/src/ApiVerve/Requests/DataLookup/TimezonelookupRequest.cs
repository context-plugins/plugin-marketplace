namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Timezonelookup operation.
/// </summary>
public sealed record TimezonelookupRequest
{
    /// <summary>
    /// The city name for which you want to get the data (e.g., Harare)
    /// </summary>
    public required string City { get; init; }
}
