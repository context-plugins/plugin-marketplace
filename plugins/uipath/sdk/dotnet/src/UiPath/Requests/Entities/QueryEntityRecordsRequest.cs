using UiPath.Models;

namespace UiPath.Requests.Entities;

/// <summary>
/// The inputs of the QueryEntityRecords operation.
/// </summary>
public sealed record QueryEntityRecordsRequest
{
    /// <summary>
    /// Name of the custom entity type as defined in the tenant's Data Service schema. Entity names are case-sensitive.
    /// </summary>
    public required string EntityName { get; init; }

    public required EntityQueryRequest Body { get; init; }
}
