using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.ConditionSets;

/// <summary>
/// The inputs of the Index9 operation.
/// </summary>
public sealed record Index9Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

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
    /// Filter condition sets by purpose. When not specified, all active condition sets are returned.
    /// </summary>
    public ConditionSetPurpose? Purpose { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
