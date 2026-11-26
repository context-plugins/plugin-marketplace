using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Bills;

/// <summary>
/// The inputs of the UpdateBill operation.
/// </summary>
public sealed record UpdateBillRequest
{
    [MinLength(1)]
    public required string BillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required BillUpdateRequestDto Body { get; init; }
}
