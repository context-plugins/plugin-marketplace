using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Requests.Transfers;

/// <summary>
/// The inputs of the ListTransfers operation.
/// </summary>
public sealed record ListTransfersRequest
{
    /// <summary>
    /// Unix timestamp filter (start).
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp filter (end).
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of records to return. Default: 10. Maximum: 100.
    /// </summary>
    [Maximum(100)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of records to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;

    /// <summary>
    /// Filter transfers by settlement ID in the Linked Account.
    /// </summary>
    public string? RecipientSettlementId { get; init; }

    /// <summary>
    /// Expand recipient_settlement to include full settlement object.
    /// </summary>
    public ExpandRazorpayTransfersApi? Expand { get; init; }
}
