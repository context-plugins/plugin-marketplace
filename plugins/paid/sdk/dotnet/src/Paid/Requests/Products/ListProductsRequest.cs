namespace Paid.Requests.Products;

/// <summary>
/// The inputs of the ListProducts operation.
/// </summary>
public sealed record ListProductsRequest
{
    public int Limit { get; init; } = 10;

    public int? Offset { get; init; }

    /// <summary>
    /// Search by product name (case-insensitive, matches anywhere in the name).
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// Filter by the product's active flag: true or false.
    /// </summary>
    public bool? Active { get; init; }

    /// <summary>
    /// Filter by archived state: true returns only archived products, false only non-archived. Omit to include both.
    /// </summary>
    public bool? Archived { get; init; }

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
