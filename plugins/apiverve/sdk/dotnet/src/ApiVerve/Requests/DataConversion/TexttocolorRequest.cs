namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Texttocolor operation.
/// </summary>
public sealed record TexttocolorRequest
{
    /// <summary>
    /// The text to convert the color from
    /// </summary>
    public required string Color { get; init; }
}
