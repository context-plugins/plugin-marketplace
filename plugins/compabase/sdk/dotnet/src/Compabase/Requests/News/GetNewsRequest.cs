using Compabase.Models.Enums;

namespace Compabase.Requests.News;

/// <summary>
/// The inputs of the GetNews operation.
/// </summary>
public sealed record GetNewsRequest
{
    /// <summary>
    /// Only news published on or after this date (YYYY-MM-DD).
    /// </summary>
    public string? Since { get; init; }

    /// <summary>
    /// 2–5 digit prefix of the company main PKD code (e.g. <c>62</c> for IT).
    /// </summary>
    public string? Pkd { get; init; }

    /// <summary>
    /// Company seat city.
    /// </summary>
    public string? City { get; init; }

    /// <summary>
    /// Language of the returned titles.
    /// </summary>
    public Locale? Locale { get; init; }

    /// <summary>
    /// Page size, 1–100 (default 50).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Zero-based offset (max 5000).
    /// </summary>
    public int? Offset { get; init; }
}
