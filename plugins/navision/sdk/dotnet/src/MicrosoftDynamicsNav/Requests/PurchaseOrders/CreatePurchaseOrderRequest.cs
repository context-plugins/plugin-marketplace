using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.PurchaseOrders;

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
