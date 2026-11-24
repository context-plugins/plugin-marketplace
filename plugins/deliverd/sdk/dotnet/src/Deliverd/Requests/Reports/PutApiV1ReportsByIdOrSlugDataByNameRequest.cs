using System.Collections.Generic;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PutApiV1ReportsByIdOrSlugDataByName operation.
/// </summary>
public sealed record PutApiV1ReportsByIdOrSlugDataByNameRequest
{
    public required string IdOrSlug { get; init; }

    public required string Name { get; init; }

    public IReadOnlyDictionary<string, object>? Body { get; init; }
}
