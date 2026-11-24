using Divvy.Models;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the CreateCustomer operation.
/// </summary>
public sealed record CreateCustomerRequest
{
    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public required CustomerCreateRequestDto Body { get; init; }
}
