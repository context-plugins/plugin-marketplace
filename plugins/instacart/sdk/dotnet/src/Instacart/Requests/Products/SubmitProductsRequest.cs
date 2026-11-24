using Instacart.Models;

namespace Instacart.Requests.Products;

/// <summary>
/// The inputs of the SubmitProducts operation.
/// </summary>
public sealed record SubmitProductsRequest
{
    public required ProductSubmissionRequest Body { get; init; }
}
