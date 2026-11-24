using DoiT.Models;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the Query operation.
/// </summary>
public sealed record QueryRequest
{
    public AnalyticsV1ReportsQueryRequest? Body { get; init; }
}
