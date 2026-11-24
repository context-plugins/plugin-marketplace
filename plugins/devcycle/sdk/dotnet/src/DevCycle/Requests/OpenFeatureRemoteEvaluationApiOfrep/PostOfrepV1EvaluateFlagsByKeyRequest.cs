using System.ComponentModel.DataAnnotations;
using DevCycle.Models;

namespace DevCycle.Requests.OpenFeatureRemoteEvaluationApiOfrep;

/// <summary>
/// The inputs of the PostOfrepV1EvaluateFlagsByKey operation.
/// </summary>
public sealed record PostOfrepV1EvaluateFlagsByKeyRequest
{
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    public OfrepEvaluationRequest? Body { get; init; }
}
