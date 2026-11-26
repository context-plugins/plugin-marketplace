using System;

namespace Dynamics365BusinessCentral.Requests.Customers;

/// <summary>
/// The inputs of the GetCustomer operation.
/// </summary>
public sealed record GetCustomerRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the customer
    /// </summary>
    public required Guid CustomerId { get; init; }

    /// <summary>
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Related entities to expand inline
    /// </summary>
    public string? Expand { get; init; }
}
