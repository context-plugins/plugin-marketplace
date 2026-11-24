using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.News;

/// <summary>
/// The inputs of the NewsNewsGet operation.
/// </summary>
public sealed record NewsNewsGetRequest
{
    /// <summary>
    /// match title/summary
    /// </summary>
    public Q? Q { get; init; }

    /// <summary>
    /// OpenAI, Google AI, Hugging Face, ...
    /// </summary>
    public Source? Source { get; init; }

    [Maximum(100)]
    public int Limit { get; init; } = 30;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
