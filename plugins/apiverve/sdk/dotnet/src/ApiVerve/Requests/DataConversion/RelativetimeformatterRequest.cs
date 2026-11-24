namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Relativetimeformatter operation.
/// </summary>
public sealed record RelativetimeformatterRequest
{
    /// <summary>
    /// Unix timestamp in seconds or milliseconds
    /// </summary>
    public required string Timestamp { get; init; }

    /// <summary>
    /// Reference time to compare against (default: current time)
    /// </summary>
    public string? Reference { get; init; }

    /// <summary>
    /// Output style
    /// </summary>
    public string? Style { get; init; }
}
