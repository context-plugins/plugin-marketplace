using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugRollback operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugRollbackRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsRollbackRequest? Body { get; init; }
}
