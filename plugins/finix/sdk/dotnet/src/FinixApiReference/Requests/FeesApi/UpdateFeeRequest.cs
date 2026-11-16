using FinixApiReference.Models;

namespace FinixApiReference.Requests.FeesApi;

/// <summary>
/// The inputs of the UpdateFee operation.
/// </summary>
public sealed record UpdateFeeRequest
{
    /// <summary>
    /// The <c>Fee</c> ID.
    /// </summary>
    public required string FeeId { get; init; }

    public required UpdateFee Body { get; init; }
}
