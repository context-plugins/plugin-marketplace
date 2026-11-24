using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.DataSources;

/// <summary>
/// The inputs of the CreateDataSource operation.
/// </summary>
public sealed record CreateDataSourceRequest
{
    /// <summary>
    /// The API ID for the GraphQL API for the DataSource.
    /// </summary>
    public required string ApiId { get; init; }

    public V1ApisDatasourcesRequest? Body { get; init; }
}
