using CommonElements.Models;

namespace CommonElements.Requests.AggregatesAndCompliance;

/// <summary>
/// The inputs of the ComplianceScan operation.
/// </summary>
public sealed record ComplianceScanRequest
{
    public required ApiV1ComplianceScanRequest Body { get; init; }
}
