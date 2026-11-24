namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Unixtimestamp operation.
/// </summary>
public sealed record UnixtimestampRequest
{
    /// <summary>
    /// Unix timestamp to convert
    /// </summary>
    public required string Timestamp { get; init; }

    /// <summary>
    /// Timestamp format
    /// </summary>
    public string? Format { get; init; }
}
