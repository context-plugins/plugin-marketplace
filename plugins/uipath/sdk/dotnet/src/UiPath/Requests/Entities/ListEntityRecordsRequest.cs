using UiPath.Core.Validation.Attributes;

namespace UiPath.Requests.Entities;

/// <summary>
/// The inputs of the ListEntityRecords operation.
/// </summary>
public sealed record ListEntityRecordsRequest
{
    /// <summary>
    /// Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive.
    /// </summary>
    public required string EntityName { get; init; }

    /// <summary>
    /// Filter expression to narrow results by field values
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Field name and direction to sort results (e.g., CreatedOn desc)
    /// </summary>
    public string? Orderby { get; init; }

    /// <summary>
    /// Maximum number of records to return
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int? Top { get; init; }

    /// <summary>
    /// Number of records to skip for pagination
    /// </summary>
    [Minimum(0)]
    public int? Skip { get; init; }

    /// <summary>
    /// Comma-separated list of field names to include in the response
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Related entity references to expand inline in the response
    /// </summary>
    public string? Expand { get; init; }
}
