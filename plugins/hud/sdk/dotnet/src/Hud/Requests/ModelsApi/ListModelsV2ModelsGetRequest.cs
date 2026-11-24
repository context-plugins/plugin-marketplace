using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListModelsV2ModelsGet operation.
/// </summary>
public sealed record ListModelsV2ModelsGetRequest
{
    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 100;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// <c>catalog</c> for global base models, <c>owned</c> for the team's trainable forks; both when omitted. Signed-out callers must pass <c>catalog</c>.
    /// </summary>
    public ScopeHudPlatformModelsApi? Scope { get; init; }

    /// <summary>
    /// Case-insensitive match on display name, model name, or provider name.
    /// </summary>
    public Search? Search { get; init; }

    /// <summary>
    /// Only models that can be fine-tuned.
    /// </summary>
    public bool Trainable { get; init; } = false;

    /// <summary>
    /// Include models whose deprecation date has passed.
    /// </summary>
    public bool IncludeDeprecated { get; init; } = true;

    /// <summary>
    /// Row order. Signed-out callers cannot sort by <c>usage</c>.
    /// </summary>
    public ModelListSort1? Sort { get; init; }
}
