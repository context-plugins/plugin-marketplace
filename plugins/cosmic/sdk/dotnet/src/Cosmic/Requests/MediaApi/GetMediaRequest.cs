namespace Cosmic.Requests.MediaApi;

/// <summary>
/// The inputs of the GetMedia operation.
/// </summary>
public sealed record GetMediaRequest
{
    /// <summary>
    /// The Bucket slug. Found under Bucket &gt; Settings in the dashboard.
    /// </summary>
    public required string Slug { get; init; }

    /// <summary>
    /// The media id.
    /// </summary>
    public required string MediaId { get; init; }

    /// <summary>
    /// The Bucket read key. Required unless the Bucket has no read key configured.
    /// </summary>
    public string? ReadKey { get; init; }

    /// <summary>
    /// Comma-separated list of properties to return, including nested metadata paths. Omit to return everything. Narrowing <c>props</c> is the main way to keep responses under the 6 MB response cap and to reduce latency.
    /// </summary>
    public string? Props { get; init; }

    /// <summary>
    /// Set to <c>false</c> to bypass the cache and read through to the database. Guarantees you see writes you just made, at the cost of higher latency.
    /// </summary>
    public bool UseCache { get; init; } = true;

    /// <summary>
    /// Set to <c>true</c> to indent the JSON response for human reading. Increases response size.
    /// </summary>
    public bool Pretty { get; init; } = false;
}
