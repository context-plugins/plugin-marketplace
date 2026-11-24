namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Numberbaseconverter operation.
/// </summary>
public sealed record NumberbaseconverterRequest
{
    /// <summary>
    /// The number to convert
    /// </summary>
    public required string Value { get; init; }

    /// <summary>
    /// Source base (default: 10)
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Target base (returns all common bases if not specified)
    /// </summary>
    public int? To { get; init; }
}
