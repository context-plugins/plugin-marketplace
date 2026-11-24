namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Birthstones operation.
/// </summary>
public sealed record BirthstonesRequest
{
    /// <summary>
    /// The month number (1-12) or name
    /// </summary>
    public required string Month { get; init; }
}
