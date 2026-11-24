using System;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1Datasets operation.
/// </summary>
public sealed record GetApiV1DatasetsRequest
{
    public string? DatasourceName { get; init; }

    public DateTimeOffset? From { get; init; }

    public int? Page { get; init; }

    public string? Search { get; init; }

    public int? Size { get; init; }
}
