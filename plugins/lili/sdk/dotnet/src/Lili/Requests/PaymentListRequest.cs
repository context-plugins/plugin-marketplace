using System;

namespace Lili.Requests;

/// <summary>
/// The inputs of the PaymentList operation.
/// </summary>
public sealed record PaymentListRequest
{
    /// <summary>
    /// The customer ID, as provided in the create lead response
    /// </summary>
    public string? CustomerId { get; init; }

    /// <summary>
    /// The receiver account number
    /// </summary>
    public string? ReceiverAccountNumber { get; init; }

    /// <summary>
    /// Start date for the payment list
    /// </summary>
    public DateTimeOffset? StartDate { get; init; }

    /// <summary>
    /// End date for the payment list
    /// </summary>
    public DateTimeOffset? EndDate { get; init; }
}
