namespace UiPath.Requests.Entities;

/// <summary>
/// The inputs of the CreateEntityRecord operation.
/// </summary>
public sealed record CreateEntityRecordRequest
{
    /// <summary>
    /// Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive.
    /// </summary>
    public required string EntityName { get; init; }

    public required object Body { get; init; }
}
