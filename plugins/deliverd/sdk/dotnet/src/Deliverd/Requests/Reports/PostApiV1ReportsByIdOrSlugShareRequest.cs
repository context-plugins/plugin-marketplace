using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugShare operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugShareRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsShareRequest? Body { get; init; }
}
