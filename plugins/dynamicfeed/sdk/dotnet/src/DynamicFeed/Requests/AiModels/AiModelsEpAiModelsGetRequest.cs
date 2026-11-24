using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.AiModels;

/// <summary>
/// The inputs of the AiModelsEpAiModelsGet operation.
/// </summary>
public sealed record AiModelsEpAiModelsGetRequest
{
    /// <summary>
    /// search a model name (e.g. llama, qwen, whisper)
    /// </summary>
    public Query? Query { get; init; }

    /// <summary>
    /// filter by org/author (e.g. meta-llama, deepseek-ai)
    /// </summary>
    public Org? Org { get; init; }

    /// <summary>
    /// text-generation (default), text-to-image, ... or 'any'
    /// </summary>
    public string Task { get; init; } = "text-generation";

    /// <summary>
    /// trending | newest | downloads
    /// </summary>
    public string Sort { get; init; } = "trending";

    [Maximum(50)]
    public int Limit { get; init; } = 25;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
