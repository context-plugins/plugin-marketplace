using SerpApi.Models.Enums;

namespace SerpApi.Requests.Search;

/// <summary>
/// The inputs of the RunSearch operation.
/// </summary>
public sealed record RunSearchRequest
{
    /// <summary>
    /// Search engine identifier (e.g. google, bing, youtube).
    /// </summary>
    public required string Engine { get; init; }

    /// <summary>
    /// Search query (used by most engines except YouTube).
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Search query used by the YouTube engine.
    /// </summary>
    public string? SearchQuery { get; init; }

    /// <summary>
    /// SerpApi private key (may also be supplied via the apiKey security scheme).
    /// </summary>
    public string? ApiKey { get; init; }

    /// <summary>
    /// Geographic origin for the search.
    /// </summary>
    public string? Location { get; init; }

    /// <summary>
    /// Two-letter country code.
    /// </summary>
    public string? Gl { get; init; }

    /// <summary>
    /// Two-letter language code.
    /// </summary>
    public string? Hl { get; init; }

    /// <summary>
    /// Device type to emulate.
    /// </summary>
    public Device? Device { get; init; }

    /// <summary>
    /// Force fresh (uncached) results.
    /// </summary>
    public bool? NoCache { get; init; }

    /// <summary>
    /// Submit asynchronously and retrieve results later.
    /// </summary>
    public bool? Async { get; init; }

    /// <summary>
    /// Response format.
    /// </summary>
    public Output? Output { get; init; }
}
