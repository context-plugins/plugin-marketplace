using DoiT.Models;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the AsyncRunInline operation.
/// </summary>
public sealed record AsyncRunInlineRequest
{
    /// <summary>
    /// If true, validates the request and returns 200 without creating an operation or submitting a job. The response body will have status "dry_run" and no operationId.
    /// </summary>
    public bool? DryRun { get; init; }

    /// <summary>
    /// Unique key for this submission. Required on every request. Deduplication is based on config content, not this key.
    /// </summary>
    public required string IdempotencyKey { get; init; }

    public AnalyticsV1ReportsActionsRunRequest? Body { get; init; }
}
