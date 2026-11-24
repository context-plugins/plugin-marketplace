using RelmCrm.Models;

namespace RelmCrm.Requests.Contacts;

/// <summary>
/// The inputs of the CreateContact operation.
/// </summary>
public sealed record CreateContactRequest
{
    /// <summary>
    /// Safely retry a create: same key + same body replays the original result.
    /// </summary>
    public string? IdempotencyKey { get; init; }

    public required ContactInput Body { get; init; }
}
