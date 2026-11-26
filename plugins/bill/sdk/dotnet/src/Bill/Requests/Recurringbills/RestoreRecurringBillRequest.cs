using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Recurringbills;

/// <summary>
/// The inputs of the RestoreRecurringBill operation.
/// </summary>
public sealed record RestoreRecurringBillRequest
{
    [MinLength(1)]
    public required string RecurringBillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
