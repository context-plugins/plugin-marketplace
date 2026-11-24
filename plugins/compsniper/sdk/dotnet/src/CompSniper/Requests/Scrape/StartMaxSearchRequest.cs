using System.ComponentModel.DataAnnotations;
using CompSniper.Models;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Scrape;

/// <summary>
/// The inputs of the StartMaxSearch operation.
/// </summary>
public sealed record StartMaxSearchRequest
{
    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }

    /// <summary>
    /// Return the previously created job when a submission is retried.
    /// </summary>
    [MaxLength(200)]
    public string? IdempotencyKey { get; init; }

    public required MaxSearchRequest Body { get; init; }
}
