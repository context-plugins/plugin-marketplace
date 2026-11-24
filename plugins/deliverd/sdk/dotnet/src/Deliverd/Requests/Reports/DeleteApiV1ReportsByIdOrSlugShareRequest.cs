using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the DeleteApiV1ReportsByIdOrSlugShare operation.
/// </summary>
public sealed record DeleteApiV1ReportsByIdOrSlugShareRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsShareRequest1? Body { get; init; }
}
