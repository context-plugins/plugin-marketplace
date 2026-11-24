namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Colorbrightness operation.
/// </summary>
public sealed record ColorbrightnessRequest
{
    /// <summary>
    /// Hex color value (with or without # prefix)
    /// </summary>
    public required string Hex { get; init; }
}
