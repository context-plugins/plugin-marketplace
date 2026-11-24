namespace Paid.Requests.Agents;

/// <summary>
/// The inputs of the List operation.
/// </summary>
public sealed record ListRequest
{
    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
