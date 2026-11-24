namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Filesizeformatter operation.
/// </summary>
public sealed record FilesizeformatterRequest
{
    /// <summary>
    /// Number of bytes to format
    /// </summary>
    public required int Bytes { get; init; }

    /// <summary>
    /// Specific target unit (optional, auto-selects best unit if not specified)
    /// </summary>
    public string? Unit { get; init; }

    /// <summary>
    /// Decimal places (0-10)
    /// </summary>
    public int? Precision { get; init; }

    /// <summary>
    /// Standard to use: binary (1024) or decimal (1000)
    /// </summary>
    public string? Standard { get; init; }
}
