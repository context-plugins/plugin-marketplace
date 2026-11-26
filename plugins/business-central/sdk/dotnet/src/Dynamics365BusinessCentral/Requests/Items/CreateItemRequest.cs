using System;
using Dynamics365BusinessCentral.Models;

namespace Dynamics365BusinessCentral.Requests.Items;

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
