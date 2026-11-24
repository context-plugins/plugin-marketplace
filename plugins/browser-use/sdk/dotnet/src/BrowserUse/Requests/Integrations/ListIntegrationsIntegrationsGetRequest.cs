using BrowserUse.Core.Validation.Attributes;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Requests.Integrations;

/// <summary>
/// The inputs of the ListIntegrationsIntegrationsGet operation.
/// </summary>
public sealed record ListIntegrationsIntegrationsGetRequest
{
    /// <summary>
    /// Maximum number of results
    /// </summary>
    public Limit? Limit { get; init; }

    /// <summary>
    /// Number of results to skip
    /// </summary>
    [Minimum(0)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Filter by name, description or provider
    /// </summary>
    public Search? Search { get; init; }

    /// <summary>
    /// Only return popular integrations
    /// </summary>
    public bool PopularOnly { get; init; } = false;

    /// <summary>
    /// Only return integrations this project has connected
    /// </summary>
    public bool ConnectedOnly { get; init; } = false;
}
