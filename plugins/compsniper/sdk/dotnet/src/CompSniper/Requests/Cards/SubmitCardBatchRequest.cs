using System.ComponentModel.DataAnnotations;
using CompSniper.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Cards;

/// <summary>
/// The inputs of the SubmitCardBatch operation.
/// </summary>
public sealed record SubmitCardBatchRequest
{
    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }

    /// <summary>
    /// Safely retry a submission without creating a duplicate job.
    /// </summary>
    [MaxLength(200)]
    public string? IdempotencyKey { get; init; }

    public required CardBatchRequest Body { get; init; }
}
