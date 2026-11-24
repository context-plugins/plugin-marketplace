using FlowAccount.Models;

namespace FlowAccount.Requests.ProductUnitApi;

/// <summary>
/// The inputs of the ProductUnitUpdateProductUnit operation.
/// </summary>
public sealed record ProductUnitUpdateProductUnitRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required ProductUnit Body { get; init; }
}
