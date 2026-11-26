using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Recurringbills;

/// <summary>
/// The inputs of the UpdateRecurringBill operation.
/// </summary>
public sealed record UpdateRecurringBillRequest
{
    [MinLength(1)]
    public required string RecurringBillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required RecurringBillUpdateRequestDto Body { get; init; }
}
