namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the GetApiV1ReportsByIdOrSlugData operation.
/// </summary>
public sealed record GetApiV1ReportsByIdOrSlugDataRequest
{
    public required string IdOrSlug { get; init; }
}
