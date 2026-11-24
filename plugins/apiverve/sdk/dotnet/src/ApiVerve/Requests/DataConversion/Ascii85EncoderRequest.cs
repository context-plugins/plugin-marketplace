namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Ascii85Encoder operation.
/// </summary>
public sealed record Ascii85EncoderRequest
{
    /// <summary>
    /// Text to encode
    /// </summary>
    public required string Text { get; init; }

    /// <summary>
    /// Action to perform
    /// </summary>
    public string? Action { get; init; }

    /// <summary>
    /// Output format
    /// </summary>
    public string? Format { get; init; }
}
