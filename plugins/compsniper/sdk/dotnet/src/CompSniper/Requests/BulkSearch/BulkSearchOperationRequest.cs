using System.ComponentModel.DataAnnotations;
using CompSniper.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.BulkSearch;

/// <summary>
/// The inputs of the BulkSearchInvoke operation.
/// </summary>
public sealed record BulkSearchOperationRequest
{
    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }

    /// <summary>
    /// Replay a completed run with the identical request body without repeating searches or consuming quota.
    /// </summary>
    [MaxLength(200)]
    public string? IdempotencyKey { get; init; }

    public required BulkSearchRequest Body { get; init; }
}
