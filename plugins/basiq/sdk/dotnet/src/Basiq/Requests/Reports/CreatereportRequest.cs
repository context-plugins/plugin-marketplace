using Basiq.Models;

namespace Basiq.Requests.Reports;

/// <summary>
/// The inputs of the Createreport operation.
/// </summary>
public sealed record CreatereportRequest
{
    /// <summary>
    /// Include the details of the report you would like to create along with the filters.
    /// </summary>
    public required ReportsRequest Body { get; init; }
}
