using Paid.Models;

namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the CreateProduct operation.
/// </summary>
public sealed record CreateProductOperationRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public CreateProductRequest? Body { get; init; }
}
