using Cosmic.Core.Validation.Attributes;
using Cosmic.Models.Enums;

namespace Cosmic.Requests.MediaApi;

/// <summary>
/// The inputs of the ListMedia operation.
/// </summary>
public sealed record ListMediaRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The Bucket read key. Required unless the Bucket has no read key configured.
    /// </summary>
    public string? ReadKey { get; init; }

    /// <summary>
    /// A URL-encoded JSON object used to filter results. Follows MongoDB comparison (<c>$eq</c>, <c>$gt</c>, <c>$gte</c>, <c>$lt</c>, <c>$lte</c>, <c>$in</c>, <c>$all</c>, <c>$ne</c>, <c>$nin</c>), evaluation (<c>$regex</c> with <c>$options</c>), and logical (<c>$and</c>, <c>$or</c>, <c>$not</c>, <c>$nor</c>) operators. Query Object Relationship Metafields by the related Object's <c>id</c>, not its <c>slug</c>.
    /// </summary>
    public string? Query { get; init; }

    /// <summary>
    /// Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing <c>props</c> is the main way to keep responses under the 6 MB response cap and to reduce latency.
    /// </summary>
    public string? Props { get; init; }

    /// <summary>
    /// Sort order. Prefix with <c>-</c> for descending.
    /// </summary>
    public Sort? Sort { get; init; }

    /// <summary>
    /// Maximum number of results to return.
    /// </summary>
    [Minimum(1)]
    public int Limit { get; init; } = 1000;

    /// <summary>
    /// Offset pagination: number of results to skip. Use <c>after</c> instead for large collections. Only one of <c>skip</c> and <c>after</c> may be used.
    /// </summary>
    [Minimum(0)]
    public int Skip { get; init; } = 0;

    /// <summary>
    /// Set to <c>false</c> to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.
    /// </summary>
    public bool UseCache { get; init; } = true;

    /// <summary>
    /// Set to <c>true</c> to indent the JSON response for human reading. Increases response size.
    /// </summary>
    public bool Pretty { get; init; } = false;
}
