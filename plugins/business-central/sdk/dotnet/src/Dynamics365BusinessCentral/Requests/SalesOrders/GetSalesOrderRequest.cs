using System;

namespace Dynamics365BusinessCentral.Requests.SalesOrders;

/// <summary>
/// The inputs of the GetSalesOrder operation.
/// </summary>
public sealed record GetSalesOrderRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the sales order
    /// </summary>
    public required Guid SalesOrderId { get; init; }

    /// <summary>
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Related entities to expand inline
    /// </summary>
    public string? Expand { get; init; }
}
