namespace ApiVerve.Requests.DataConversion;

/// <summary>
/// The inputs of the Punycode operation.
/// </summary>
public sealed record PunycodeRequest
{
    /// <summary>
    /// Unicode text or domain to encode (max 1000 characters)
    /// </summary>
    public required string Text { get; init; }

    /// <summary>
    /// Conversion mode
    /// </summary>
    public string? Mode { get; init; }
}
