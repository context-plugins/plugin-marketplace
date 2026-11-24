using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Items;

/// <summary>
/// The inputs of the UpdateItem operation.
/// </summary>
public sealed record UpdateItemRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// The unique identifier of the item
    /// </summary>
    public required Guid ItemId { get; init; }

    /// <summary>
    /// ETag value for optimistic concurrency control
    /// </summary>
    public required string IfMatch { get; init; }

    public required ItemUpdate Body { get; init; }
}
