using DevCycle.Models;

namespace DevCycle.Requests.OpenFeatureRemoteEvaluationApiOfrep;

/// <summary>
/// The inputs of the PostOfrepV1EvaluateFlags operation.
/// </summary>
public sealed record PostOfrepV1EvaluateFlagsRequest
{
    /// <summary>
    /// The request will be processed only if ETag doesn't match any of the values listed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    public OfrepBulkEvaluationRequest? Body { get; init; }
}
