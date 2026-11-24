using System;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Requests.Payees;

/// <summary>
/// The inputs of the GetPayees operation.
/// </summary>
public sealed record GetPayeesRequest
{
    /// <summary>
    /// The unique identifier of the user.
    /// </summary>
    public required Guid UserId { get; init; }

    /// <summary>
    /// The maximum number of payees to return per page. Valid values are 1-500. Default is 25.
    /// </summary>
    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// Filter expression to narrow down results. Supports the following filters:
    /// - <c>type.eq('value')</c> - Filter by payee type (domestic, biller, international, digitalWallet)
    /// - <c>connectionId.eq('value')</c> - Filter by connection ID
    /// - <c>created.bt('startDate','endDate')</c> - Filter by creation date range
    /// - <c>created.gt('date')</c> - Filter by creation date greater than
    /// - <c>created.gteq('date')</c> - Filter by creation date greater than or equal
    /// - <c>created.lt('date')</c> - Filter by creation date less than
    /// - <c>created.lteq('date')</c> - Filter by creation date less than or equal
    /// - <c>created.eq('date')</c> - Filter by creation date equal to
    /// </summary>
    public string? Filter { get; init; }
}
