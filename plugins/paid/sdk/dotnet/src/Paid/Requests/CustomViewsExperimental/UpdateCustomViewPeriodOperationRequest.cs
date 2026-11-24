using Paid.Models;

namespace Paid.Requests.CustomViewsExperimental;

/// <summary>
/// The inputs of the UpdateCustomViewPeriod operation.
/// </summary>
public sealed record UpdateCustomViewPeriodOperationRequest
{
    public required string DisplayId { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public UpdateCustomViewPeriodRequest? Body { get; init; }
}
