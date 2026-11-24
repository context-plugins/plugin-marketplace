namespace Fillo.Requests.Responses;

/// <summary>
/// The inputs of the GetResponse operation.
/// </summary>
public sealed record GetResponseRequest
{
    /// <summary>
    /// A response id.
    /// </summary>
    public required string Id { get; init; }
}
