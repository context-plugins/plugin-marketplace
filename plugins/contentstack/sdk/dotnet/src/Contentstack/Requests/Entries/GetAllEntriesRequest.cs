using Contentstack.Core.Validation.Attributes;

namespace Contentstack.Requests.Entries;

/// <summary>
/// The inputs of the GetAllEntries operation.
/// </summary>
public sealed record GetAllEntriesRequest
{
    /// <summary>
    /// The unique identifier (UID) of the content type.
    /// </summary>
    public required string ContentTypeUid { get; init; }

    /// <summary>
    /// The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified.
    /// </summary>
    public string? Locale { get; init; }

    /// <summary>
    /// Number of entries to skip for pagination.
    /// </summary>
    [Minimum(0)]
    public int Skip { get; init; } = 0;

    /// <summary>
    /// Maximum number of entries to return. Maximum allowed is 250.
    /// </summary>
    [Minimum(1)]
    [Maximum(250)]
    public int Limit { get; init; } = 100;

    /// <summary>
    /// A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field matching and comparison.
    /// </summary>
    public string? Query { get; init; }

    /// <summary>
    /// Set to true to include the total count of matching entries.
    /// </summary>
    public bool? IncludeCount { get; init; }

    /// <summary>
    /// Set to true to include the content type schema in the response.
    /// </summary>
    public bool? IncludeContentType { get; init; }

    /// <summary>
    /// Set to true to include referenced entries inline in the response.
    /// </summary>
    public bool? IncludeReference { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response.
    /// </summary>
    public string? Only { get; init; }

    /// <summary>
    /// Comma-separated list of fields to exclude from the response.
    /// </summary>
    public string? Except { get; init; }

    /// <summary>
    /// Field name to sort results in ascending order.
    /// </summary>
    public string? Asc { get; init; }

    /// <summary>
    /// Field name to sort results in descending order.
    /// </summary>
    public string? Desc { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
