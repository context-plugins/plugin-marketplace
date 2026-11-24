using UiPath.Models;

namespace UiPath.Requests.AppInventory;

/// <summary>
/// The inputs of the BulkUpsertAppInventory operation.
/// </summary>
public sealed record BulkUpsertAppInventoryRequest
{
    public required AppinventoryRequest Body { get; init; }
}
