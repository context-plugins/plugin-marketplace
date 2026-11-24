using Paid.Models.Enums;

namespace Paid.Requests.Checkouts;

/// <summary>
/// The inputs of the ListCheckouts operation.
/// </summary>
public sealed record ListCheckoutsRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    public CheckoutsGetParametersStatus? Status { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
