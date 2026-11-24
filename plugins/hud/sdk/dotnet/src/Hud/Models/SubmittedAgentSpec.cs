using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// Registered identity a hosted runner rebuilds the agent from.
/// <para>
/// Mirrors the v6 SDK's hosted submission: the ``AgentType`` value plus the
/// ``Agent.dump()`` config with runtime-only state and credentials stripped.
/// The control plane reads ``model`` (for inference routing and billing) and
/// ``max_steps`` from ``config``, and stores ``config`` as submitted except
/// that ``model`` becomes the catalog's canonical model name. The instance
/// rebuilds the agent through ``AgentType``.
/// </para>
/// </summary>
public record SubmittedAgentSpec
{
    [JsonPropertyName("type")]
    public required TypeHudPlatformRolloutsApi Type { get; init; }

    [JsonPropertyName("config")]
    public required object Config { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
