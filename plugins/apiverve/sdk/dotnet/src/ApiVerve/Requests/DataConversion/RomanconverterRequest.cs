namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Romanconverter operation.
/// </summary>
public sealed record RomanconverterRequest
{
    /// <summary>
    /// The number to convert to Roman numerals
    /// </summary>
    public required int Number { get; init; }
}
