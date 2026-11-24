namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Boggleboardgenerator operation.
/// </summary>
public sealed record BoggleboardgeneratorRequest
{
    /// <summary>
    /// Board size
    /// </summary>
    public int? Size { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable board image
    /// </summary>
    public bool? Image { get; init; }
}
