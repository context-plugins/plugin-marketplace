namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the DeleteResponse operation.
/// </summary>
public sealed record DeleteResponseRequest
{
    /// <summary>
    /// A response id.
    /// </summary>
    public required string Id { get; init; }
}
