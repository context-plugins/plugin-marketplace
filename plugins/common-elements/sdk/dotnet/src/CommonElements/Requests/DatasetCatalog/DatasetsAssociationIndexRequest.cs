using System;

namespace CommonElements.Requests.DatasetCatalog;

/// <summary>
/// The inputs of the DatasetsAssociationIndex operation.
/// </summary>
public sealed record DatasetsAssociationIndexRequest
{
    /// <summary>
    /// Association id.
    /// </summary>
    public required Guid Id { get; init; }
}
