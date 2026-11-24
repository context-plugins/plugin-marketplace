namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Base64 operation.
/// </summary>
public sealed record Base64Request
{
    /// <summary>
    /// The text to encode
    /// </summary>
    public required string Text { get; init; }

    /// <summary>
    /// The action to perform
    /// </summary>
    public string? Action { get; init; }
}
