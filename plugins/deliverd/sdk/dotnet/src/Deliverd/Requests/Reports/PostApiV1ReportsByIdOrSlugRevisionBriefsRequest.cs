using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugRevisionBriefs operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugRevisionBriefsRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsRevisionBriefsRequest? Body { get; init; }
}
