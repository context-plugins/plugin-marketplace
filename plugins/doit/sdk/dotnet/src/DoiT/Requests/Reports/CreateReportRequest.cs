using DoiT.Models;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the CreateReport operation.
/// </summary>
public sealed record CreateReportRequest
{
    public AnalyticsV1ReportsRequest? Body { get; init; }
}
