using System;

namespace MicrosoftDynamicsNav.Requests.Items;

/// <summary>
/// The inputs of the GetItem operation.
/// </summary>
public sealed record GetItemRequest
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
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }
}
