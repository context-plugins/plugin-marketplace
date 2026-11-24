namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Worldtime operation.
/// </summary>
public sealed record WorldtimeRequest
{
    /// <summary>
    /// The city name for which you want to get the current time (e.g., New York)
    /// </summary>
    public required string City { get; init; }
}
