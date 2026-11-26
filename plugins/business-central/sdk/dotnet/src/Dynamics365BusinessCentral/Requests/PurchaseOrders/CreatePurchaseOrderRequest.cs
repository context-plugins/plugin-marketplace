using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.PurchaseOrders;

/// <summary>
/// The inputs of the CreatePurchaseOrder operation.
/// </summary>
public sealed record CreatePurchaseOrderRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required PurchaseOrderCreate Body { get; init; }
}
