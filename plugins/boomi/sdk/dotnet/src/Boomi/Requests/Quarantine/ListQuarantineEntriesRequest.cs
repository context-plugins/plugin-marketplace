namespace Boomi.Requests.Quarantine;

/// <summary>
/// The inputs of the ListQuarantineEntries operation.
/// </summary>
public sealed record ListQuarantineEntriesRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }

    /// <summary>
    /// Unique identifier of the master data domain (universe).
    /// </summary>
    public required string UniverseId { get; init; }
}
