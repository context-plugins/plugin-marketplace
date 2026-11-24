using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Recurringbills;

/// <summary>
/// The inputs of the ReplaceRecurringBill operation.
/// </summary>
public sealed record ReplaceRecurringBillRequest
{
    [MinLength(1)]
    public required string RecurringBillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required RecurringBillReplaceRequestDto Body { get; init; }
}
