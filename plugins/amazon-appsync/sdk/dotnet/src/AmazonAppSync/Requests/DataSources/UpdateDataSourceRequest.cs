using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.DataSources;

/// <summary>
/// The inputs of the UpdateDataSource operation.
/// </summary>
public sealed record UpdateDataSourceRequest
{
    /// <summary>
    /// The API ID.
    /// </summary>
    public required string ApiId { get; init; }

    /// <summary>
    /// The new name for the data source.
    /// </summary>
    public required string Name { get; init; }

    public V1ApisDatasourcesRequest1? Body { get; init; }
}
