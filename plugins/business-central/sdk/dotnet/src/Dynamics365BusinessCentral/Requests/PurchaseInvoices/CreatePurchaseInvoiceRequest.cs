using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.PurchaseInvoices;

/// <summary>
/// The inputs of the CreatePurchaseInvoice operation.
/// </summary>
public sealed record CreatePurchaseInvoiceRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required PurchaseInvoiceCreate Body { get; init; }
}
