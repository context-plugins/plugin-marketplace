namespace Audioscrape.Requests.Libraries;

/// <summary>
/// The inputs of the GetDataset operation.
/// </summary>
public sealed record GetDatasetRequest
{
    /// <summary>
    /// Numeric dataset ID
    /// </summary>
    public required long Id { get; init; }
}
