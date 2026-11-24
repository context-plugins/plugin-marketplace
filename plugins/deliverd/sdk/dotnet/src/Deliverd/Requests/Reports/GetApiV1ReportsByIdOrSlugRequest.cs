namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the GetApiV1ReportsByIdOrSlug operation.
/// </summary>
public sealed record GetApiV1ReportsByIdOrSlugRequest
{
    public required string IdOrSlug { get; init; }
}
