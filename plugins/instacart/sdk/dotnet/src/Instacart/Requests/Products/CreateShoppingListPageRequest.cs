using Instacart.Models;

namespace Instacart.Requests.Products;

/// <summary>
/// The inputs of the CreateShoppingListPage operation.
/// </summary>
public sealed record CreateShoppingListPageRequest
{
    public required ShoppingListRequest Body { get; init; }
}
