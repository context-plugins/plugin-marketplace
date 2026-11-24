using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.SalesOrders;

/// <summary>
/// The inputs of the CreateSalesOrder operation.
/// </summary>
public sealed record CreateSalesOrderRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required SalesOrderCreate Body { get; init; }
}
