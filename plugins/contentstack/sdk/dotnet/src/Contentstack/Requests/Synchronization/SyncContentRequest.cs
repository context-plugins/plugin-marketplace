using Contentstack.Models.Enums;

namespace Contentstack.Requests.Synchronization;

/// <summary>
/// The inputs of the SyncContent operation.
/// </summary>
public sealed record SyncContentRequest
{
    /// <summary>
    /// Set to true to initiate the first sync and receive a sync token.
    /// </summary>
    public bool? Init { get; init; }

    /// <summary>
    /// The token received from a previous sync response. Use to fetch only changes since the last sync.
    /// </summary>
    public string? SyncToken { get; init; }

    /// <summary>
    /// Token to retrieve the next page of results in a large sync response.
    /// </summary>
    public string? PaginationToken { get; init; }

    /// <summary>
    /// Filter sync results by content type. Options: entry_published, entry_unpublished, entry_deleted, asset_published, asset_unpublished, asset_deleted, content_type_deleted.
    /// </summary>
    public Type1ContentstackContentDeliverySynchronizationApi? Type { get; init; }

    /// <summary>
    /// Filter sync results to a specific content type UID.
    /// </summary>
    public string? ContentTypeUid { get; init; }

    /// <summary>
    /// The locale code to retrieve localized content. Defaults to the default locale of the stack if not specified.
    /// </summary>
    public string? Locale { get; init; }

    /// <summary>
    /// The API key for the Contentstack stack.
    /// </summary>
    public required string ApiKey { get; init; }

    /// <summary>
    /// The delivery token for the stack environment.
    /// </summary>
    public required string AccessToken { get; init; }
}
