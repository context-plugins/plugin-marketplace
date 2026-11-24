namespace AmazonAppSync.Requests.DataSources;

/// <summary>
/// The inputs of the GetDataSource operation.
/// </summary>
public sealed record GetDataSourceRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The name of the data source.
    /// </summary>
    public required string Name { get; init; }
}
