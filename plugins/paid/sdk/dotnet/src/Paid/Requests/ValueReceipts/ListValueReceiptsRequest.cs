using Paid.Models.Enums;

namespace Paid.Requests.ValueReceipts;

/// <summary>
/// The inputs of the ListValueReceipts operation.
/// </summary>
public sealed record ListValueReceiptsRequest
{
    public int Limit { get; init; } = 50;

    public int Offset { get; init; } = 0;

    /// <summary>
    /// Filter by customer display ID.
    /// </summary>
    public string? CustomerId { get; init; }

    /// <summary>
    /// Filter by customer external ID.
    /// </summary>
    public string? ExternalCustomerId { get; init; }

    public string? OrderId { get; init; }

    public string? ProductId { get; init; }

    /// <summary>
    /// Include archived value receipts. Defaults to false.
    /// </summary>
    public ValueReceiptsGetParametersArchived Archived { get; init; } = ValueReceiptsGetParametersArchived.False;

    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }
}
