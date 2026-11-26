using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Customers;

/// <summary>
/// The inputs of the ArchiveCustomerContact operation.
/// </summary>
public sealed record ArchiveCustomerContactRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string ContactId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
