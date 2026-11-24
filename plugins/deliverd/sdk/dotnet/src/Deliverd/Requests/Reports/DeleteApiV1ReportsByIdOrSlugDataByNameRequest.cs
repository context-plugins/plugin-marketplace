namespace Deliverd.Requests.Reports;

/// <summary>
/// The inputs of the DeleteApiV1ReportsByIdOrSlugDataByName operation.
/// </summary>
public sealed record DeleteApiV1ReportsByIdOrSlugDataByNameRequest
{
    public required string IdOrSlug { get; init; }

    public required string Name { get; init; }
}
