using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Bills;

/// <summary>
/// The inputs of the ReplaceBill operation.
/// </summary>
public sealed record ReplaceBillRequest
{
    [MinLength(1)]
    public required string BillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BillReplaceRequestDto Body { get; init; }
}
