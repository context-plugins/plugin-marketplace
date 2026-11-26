using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Customers;

/// <summary>
/// The inputs of the CreateCustomer operation.
/// </summary>
public sealed record CreateCustomerRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required CustomerCreate Body { get; init; }
}
