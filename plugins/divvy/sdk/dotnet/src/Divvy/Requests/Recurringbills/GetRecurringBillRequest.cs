using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Recurringbills;

/// <summary>
/// The inputs of the GetRecurringBill operation.
/// </summary>
public sealed record GetRecurringBillRequest
{
    [MinLength(1)]
    public required string RecurringBillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
