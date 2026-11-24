using Deliverd.Models;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the PostApiV1ReportsByIdOrSlugCopy operation.
/// </summary>
public sealed record PostApiV1ReportsByIdOrSlugCopyRequest
{
    public required string IdOrSlug { get; init; }

    public ApiV1ReportsCopyRequest? Body { get; init; }
}
