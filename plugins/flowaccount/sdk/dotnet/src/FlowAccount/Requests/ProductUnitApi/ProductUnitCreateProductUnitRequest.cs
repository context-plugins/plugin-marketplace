using FlowAccount.Models;

namespace FlowAccount.Requests.ProductUnitApi;

/// <summary>
/// The inputs of the ProductUnitCreateProductUnit operation.
/// </summary>
public sealed record ProductUnitCreateProductUnitRequest
{
    public required string Culture { get; init; }

    public required ProductUnit Body { get; init; }
}
