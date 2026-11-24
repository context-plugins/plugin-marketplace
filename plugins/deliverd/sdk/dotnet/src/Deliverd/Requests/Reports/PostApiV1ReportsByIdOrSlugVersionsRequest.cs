using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugVersions operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugVersionsRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsVersionsRequest? Body { get; init; }
}
