using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.ModelsApi;

/// <summary>
/// The inputs of the ModelsModelsGet operation.
/// </summary>
public sealed record ModelsModelsGetRequest
{
    /// <summary>
    /// match model name/id
    /// </summary>
    public Q? Q { get; init; }

    /// <summary>
    /// openai, anthropic, google, ...
    /// </summary>
    public Provider? Provider { get; init; }

    /// <summary>
    /// max USD per 1M input tokens
    /// </summary>
    public MaxInputPrice? MaxInputPrice { get; init; }

    /// <summary>
    /// min context window in tokens
    /// </summary>
    public MinContext? MinContext { get; init; }

    /// <summary>
    /// only models that accept images
    /// </summary>
    public NeedsVision? NeedsVision { get; init; }

    [Maximum(200)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
