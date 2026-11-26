using System;

namespace Dynamics365BusinessCentral.Requests.Items;

/// <summary>
/// The inputs of the DeleteItem operation.
/// </summary>
public sealed record DeleteItemRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the item
    /// </summary>
    public required Guid ItemId { get; init; }
}
