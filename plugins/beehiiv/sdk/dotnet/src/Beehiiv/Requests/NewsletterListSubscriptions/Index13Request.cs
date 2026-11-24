using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.NewsletterListSubscriptions;

/// <summary>
/// The inputs of the Index13 operation.
/// </summary>
public sealed record Index13Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// The prefixed ID of the newsletter list object
    /// </summary>
    public required string NewsletterListId { get; init; }

    /// <summary>
    /// A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// <b>Cursor-based pagination (recommended)</b>: Use this opaque cursor token to fetch the next page of results. When provided, pagination will use cursor-based method which is more efficient and consistent than offset-based pagination.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// <b>Offset-based pagination (deprecated)</b>: Page number for offset-based pagination. Please migrate to cursor-based pagination using the <c>cursor</c> parameter. If not specified, results 1-10 from page 1 will be returned.
    /// </summary>
    public int? Page { get; init; }

    /// <summary>
    /// The direction that the results are sorted in. Defaults to asc&lt;br&gt; <c>asc</c> - Ascending, sorts from smallest to largest.&lt;br&gt; <c>desc</c> - Descending, sorts from largest to smallest.
    /// </summary>
    public RequestDirection Direction { get; init; } = RequestDirection.Asc;

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
