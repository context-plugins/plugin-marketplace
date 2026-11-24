using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugArchive operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugArchiveRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsArchiveRequest? Body { get; init; }
}
