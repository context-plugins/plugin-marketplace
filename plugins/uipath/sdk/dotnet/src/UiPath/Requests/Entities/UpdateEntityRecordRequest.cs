namespace UiPath.Requests.Entities;

/// <summary>
/// The inputs of the UpdateEntityRecord operation.
/// </summary>
public sealed record UpdateEntityRecordRequest
{
    /// <summary>
    /// Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive.
    /// </summary>
    public required string EntityName { get; init; }

    /// <summary>
    /// Unique identifier of the entity record
    /// </summary>
    public required string RecordId { get; init; }

    public required object Body { get; init; }
}
