namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Sanctionscreening operation.
/// </summary>
public sealed record SanctionscreeningRequest
{
    /// <summary>
    /// The person or company name to screen (minimum 3 characters)
    /// </summary>
    public required string Name { get; init; }

    /// <summary>
    /// Minimum match score to return, between 0.5 and 1. Lower catches more names but returns more false positives
    /// </summary>
    public double? Threshold { get; init; }

    /// <summary>
    /// Maximum number of matches to return (1-50)
    /// </summary>
    public double? Limit { get; init; }

    /// <summary>
    /// Restrict screening to one entry type
    /// </summary>
    public string? Type { get; init; }
}
