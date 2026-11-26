using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Bills;

/// <summary>
/// The inputs of the ArchiveBill operation.
/// </summary>
public sealed record ArchiveBillRequest
{
    [MinLength(1)]
    public required string BillId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
