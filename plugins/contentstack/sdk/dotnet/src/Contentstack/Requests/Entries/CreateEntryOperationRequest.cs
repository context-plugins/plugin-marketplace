using Contentstack.Models;

namespace Contentstack.Requests.Entries;

/// <summary>
/// The inputs of the CreateEntry operation.
/// </summary>
public sealed record CreateEntryOperationRequest
{
    /// <summary>
    /// The unique identifier (UID) of the content type.
    /// </summary>
    public required string ContentTypeUid { get; init; }

    /// <summary>
    /// The locale code for localized content operations.
    /// </summary>
    public string? Locale { get; init; }

    /// <summary>
    /// The API key identifying the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// User session token for authentication. Required if not using management token.
    /// </summary>
    public string? Authtoken { get; init; }

    public required CreateEntryRequest Body { get; init; }
}
