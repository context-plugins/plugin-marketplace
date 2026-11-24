namespace ApiVerve.Requests.ReferenceData;

/// <summary>
/// The inputs of the Ringsizeconverter operation.
/// </summary>
public sealed record RingsizeconverterRequest
{
    /// <summary>
    /// The ring size to convert
    /// </summary>
    public required string Size { get; init; }

    /// <summary>
    /// Source region
    /// </summary>
    public required string From { get; init; }
}
