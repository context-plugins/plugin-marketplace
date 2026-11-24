using Divvy.Models;

namespace Divvy.Requests.Recurringbills;

/// <summary>
/// The inputs of the CreateRecurringBill operation.
/// </summary>
public sealed record CreateRecurringBillRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required RecurringBillCreateRequestDto Body { get; init; }
}
