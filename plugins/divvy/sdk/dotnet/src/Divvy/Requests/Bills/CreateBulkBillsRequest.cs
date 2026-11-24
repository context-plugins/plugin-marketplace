using System.Collections.Generic;
using Divvy.Models;

namespace Divvy.Requests.Bills;

/// <summary>
/// The inputs of the CreateBulkBills operation.
/// </summary>
public sealed record CreateBulkBillsRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required IReadOnlyList<BillCreateRequestDto> Body { get; init; }
}
