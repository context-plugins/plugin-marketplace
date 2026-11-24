using System;
using MicrosoftDynamicsNav.Models;

namespace MicrosoftDynamicsNav.Requests.Items;

/// <summary>
/// The inputs of the CreateItem operation.
/// </summary>
public sealed record CreateItemRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    public required ItemCreate Body { get; init; }
}
