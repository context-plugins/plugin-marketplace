namespace Basiq.Requests.Consents;

/// <summary>
/// The inputs of the GetConsents operation.
/// </summary>
public sealed record GetConsentsRequest
{
    /// <summary>
    /// The identifier of the user
    /// </summary>
    public required string UserId { get; init; }
}
