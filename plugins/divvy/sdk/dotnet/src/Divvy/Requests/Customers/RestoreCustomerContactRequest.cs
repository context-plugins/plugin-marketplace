using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the RestoreCustomerContact operation.
/// </summary>
public sealed record RestoreCustomerContactRequest
{
    [MinLength(1)]
    public required string CustomerId { get; init; }

    [MinLength(1)]
    public required string ContactId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
