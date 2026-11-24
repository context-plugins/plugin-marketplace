namespace RelmCrm.Requests.Templates;

/// <summary>
/// The inputs of the UpdateTemplate operation.
/// </summary>
public sealed record UpdateTemplateRequest
{
    public required string Id { get; init; }

    /// <summary>
    /// The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
    /// </summary>
    public string? IfMatch { get; init; }

    public required object Body { get; init; }
}
