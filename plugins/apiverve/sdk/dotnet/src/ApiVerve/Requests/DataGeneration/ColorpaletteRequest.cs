namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Colorpalette operation.
/// </summary>
public sealed record ColorpaletteRequest
{
    /// <summary>
    /// The base color to generate the palette from (HEX format without #)
    /// </summary>
    public required string Color { get; init; }

    /// <summary>
    /// The color scheme type
    /// </summary>
    public string? Scheme { get; init; }

    /// <summary>
    /// The color variation
    /// </summary>
    public string? Variation { get; init; }

    /// <summary>
    /// Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it - mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many were actually returned. Free tier limited to 5 colors
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes
    /// </summary>
    public double? Distance { get; init; }

    /// <summary>
    /// Add complement color to analogic scheme
    /// </summary>
    public bool? AddComplement { get; init; }

    /// <summary>
    /// Return web-safe colors only
    /// </summary>
    public bool? WebSafe { get; init; }
}
