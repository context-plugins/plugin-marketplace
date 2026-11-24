namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Unitconverter operation.
/// </summary>
public sealed record UnitconverterRequest
{
    /// <summary>
    /// The value to convert
    /// </summary>
    public required double Value { get; init; }

    /// <summary>
    /// The unit to convert from
    /// </summary>
    public required string From { get; init; }

    /// <summary>
    /// The unit to convert to
    /// </summary>
    public required string To { get; init; }
}
