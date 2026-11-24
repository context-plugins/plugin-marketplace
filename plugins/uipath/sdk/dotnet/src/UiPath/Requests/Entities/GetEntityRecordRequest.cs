namespace UiPath.Requests.Entities;

/// <summary>
/// The inputs of the GetEntityRecord operation.
/// </summary>
public sealed record GetEntityRecordRequest
{
    /// <summary>
    /// Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive.
    /// </summary>
    public required string EntityName { get; init; }

    /// <summary>
    /// Unique identifier of the entity record
    /// </summary>
    public required string RecordId { get; init; }

    /// <summary>
    /// Comma-separated list of field names to include in the response
    /// </summary>
    public string? Select { get; init; }

    /// <summary>
    /// Related entity references to expand inline in the response
    /// </summary>
    public string? Expand { get; init; }
}
