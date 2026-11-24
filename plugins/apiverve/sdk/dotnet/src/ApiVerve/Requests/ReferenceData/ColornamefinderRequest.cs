namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Colornamefinder operation.
/// </summary>
public sealed record ColornamefinderRequest
{
    /// <summary>
    /// Hex color value (with or without # prefix)
    /// </summary>
    public required string Hex { get; init; }

    /// <summary>
    /// Number of closest color matches to return
    /// </summary>
    public int? Closest { get; init; }
}
