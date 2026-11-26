using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.SalesOrders;

/// <summary>
/// The inputs of the UpdateSalesOrder operation.
/// </summary>
public sealed record UpdateSalesOrderRequest
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
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required SalesOrderUpdate Body { get; init; }
}
