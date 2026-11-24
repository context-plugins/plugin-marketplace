using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugComments operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugCommentsRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsCommentsRequest? Body { get; init; }
}
