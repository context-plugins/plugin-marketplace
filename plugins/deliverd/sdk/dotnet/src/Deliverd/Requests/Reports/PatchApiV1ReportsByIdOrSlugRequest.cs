using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PatchApiV1ReportsByIdOrSlug operation.
/// </summary>
public sealed record PatchApiV1ReportsByIdOrSlugRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsRequest1? Body { get; init; }
}
