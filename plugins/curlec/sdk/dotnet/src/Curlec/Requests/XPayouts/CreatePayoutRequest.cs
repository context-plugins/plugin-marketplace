using System.ComponentModel.DataAnnotations;
using Curlec.Models;

namespace Curlec.Requests.XPayouts;

/// <summary>
/// The inputs of the CreatePayout operation.
/// </summary>
public sealed record CreatePayoutRequest
{
    /// <summary>
    /// UUID v4 idempotency key. Mandatory since March 15, 2025.
    /// </summary>
    [StringLength(36, MinimumLength = 4)]
    public required string XPayoutIdempotency { get; init; }

    public required PayoutsRequest Body { get; init; }
}
