namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Guidgenerator operation.
/// </summary>
public sealed record GuidgeneratorRequest
{
    /// <summary>
    /// Number of GUIDs to generate
    /// </summary>
    public int? Count { get; init; }

    /// <summary>
    /// Output format
    /// </summary>
    public string? Format { get; init; }
}
