using AmazonAppSync.Models;

namespace AmazonAppSync.Requests.DataSources;

/// <summary>
/// The inputs of the StartDataSourceIntrospection operation.
/// </summary>
public sealed record StartDataSourceIntrospectionRequest
{
    public V1DatasourcesIntrospectionsRequest? Body { get; init; }
}
