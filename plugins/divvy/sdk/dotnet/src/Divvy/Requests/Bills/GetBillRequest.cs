using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Bills;

/// <summary>
/// The inputs of the GetBill operation.
/// </summary>
public sealed record GetBillRequest
{
    [MinLength(1)]
    [RegularExpression("^00n[a-zA-Z0-9]{17}$")]
    public required string BillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
