using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Recurringbills;

/// <summary>
/// The inputs of the ArchiveRecurringBill operation.
/// </summary>
public sealed record ArchiveRecurringBillRequest
{
    [MinLength(1)]
    public required string RecurringBillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
