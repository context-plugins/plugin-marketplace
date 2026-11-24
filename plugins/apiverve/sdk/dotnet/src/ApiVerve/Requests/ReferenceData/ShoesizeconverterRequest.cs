namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Shoesizeconverter operation.
/// </summary>
public sealed record ShoesizeconverterRequest
{
    /// <summary>
    /// The shoe size to convert
    /// </summary>
    public required string Size { get; init; }

    /// <summary>
    /// Source region
    /// </summary>
    public required string From { get; init; }

    /// <summary>
    /// Gender sizing
    /// </summary>
    public string? Gender { get; init; }
}
