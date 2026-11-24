using System;

namespace MicrosoftDynamicsNav.Requests.SalesOrders;

/// <summary>
/// The inputs of the DeleteSalesOrder operation.
/// </summary>
public sealed record DeleteSalesOrderRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the sales order
    /// </summary>
    public required Guid SalesOrderId { get; init; }
}
