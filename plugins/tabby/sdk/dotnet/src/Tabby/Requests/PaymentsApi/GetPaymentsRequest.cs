using System;
using Tabby.Core.Validation.Attributes;
using Tabby.Models.Enums;

namespace Tabby.Requests.PaymentsApi;

/// <summary>
/// The inputs of the GetPayments operation.
/// </summary>
public sealed record GetPaymentsRequest
{
    /// <summary>
    /// This is a filter for the payment creation date, use it to get the list of payments where creation date &gt;= created_at__gte. ISO 8601 date time format (greater than or equal to). No time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 -&gt; 2020-01-23T00:00:00Z.
    /// </summary>
    public DateTimeOffset? CreatedAtGte { get; init; }

    /// <summary>
    /// This is a filter for the payment creation date, use it to get the list of payments where creation date &lt;= created_at__lte. ISO 8601 date time format (less than or equal to). No time should be provided, it starts at 00:00:00 be default. For example 2020-01-23 -&gt; 2020-01-23T00:00:00Z.
    /// </summary>
    public DateTimeOffset? CreatedAtLte { get; init; }

    /// <summary>
    /// Limits the number of returned results.
    /// </summary>
    [Maximum(20)]
    public int? Limit { get; init; }

    /// <summary>
    /// Filter the orders by specific statuses:
    ///   - <c>authorized</c>, <c>closed</c> and <c>rejected</c> belong to the API payment statuses;
    ///   - <c>new</c>, <c>captured</c>, <c>refunded</c> and <c>cancelled</c>` refer to the statuses on Tabby Merchant Dashboard;
    ///   - If absent, all <c>AUTHORIZED</c> and <c>CLOSED</c> payments are returned.
    /// </summary>
    public Status1TabbyApiReferencePaymentsApi? Status { get; init; }

    /// <summary>
    /// The number of records into a dataset that you want to start, indexed at 0.
    /// </summary>
    public int? Offset { get; init; }
}
