using Hud.Models.AnyOf;

namespace Hud.Requests.QaAgents;

/// <summary>
/// The inputs of the ListResourceQaAgentResultsV2QaAgentsResultsResourcesGet operation.
/// </summary>
public sealed record ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest
{
    public SubjectType? SubjectType { get; init; }

    public SubjectIds? SubjectIds { get; init; }

    public ResultIds? ResultIds { get; init; }
}
