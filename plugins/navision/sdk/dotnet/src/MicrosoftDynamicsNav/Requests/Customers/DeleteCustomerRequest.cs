using System;

namespace MicrosoftDynamicsNav.Requests.Customers;

/// <summary>
/// The inputs of the DeleteCustomer operation.
/// </summary>
public sealed record DeleteCustomerRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the customer
    /// </summary>
    public required Guid CustomerId { get; init; }
}
