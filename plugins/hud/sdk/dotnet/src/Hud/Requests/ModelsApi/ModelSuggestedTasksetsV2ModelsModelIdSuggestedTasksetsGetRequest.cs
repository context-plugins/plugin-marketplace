using System;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet operation.
/// </summary>
public sealed record ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest
{
    public required Guid ModelId { get; init; }

    public Exclude? Exclude { get; init; }

    public Search1? Search { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    public Purpose2? Purpose { get; init; }
}
