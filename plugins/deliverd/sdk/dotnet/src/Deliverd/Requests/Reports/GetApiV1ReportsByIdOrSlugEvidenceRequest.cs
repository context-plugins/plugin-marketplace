using Deliverd.Models.Enums;

namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the GetApiV1ReportsByIdOrSlugEvidence operation.
/// </summary>
public sealed record GetApiV1ReportsByIdOrSlugEvidenceRequest
{
    public required string IdOrSlug { get; init; }

    public Format? Format { get; init; }
}
