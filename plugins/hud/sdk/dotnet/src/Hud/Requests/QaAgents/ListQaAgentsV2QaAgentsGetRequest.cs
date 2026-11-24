using Hud.Core.Validation.Attributes;
using Hud.Models.Enums;

namespace Hud.Requests.QaAgents;

/// <summary>
/// The inputs of the ListQaAgentsV2QaAgentsGet operation.
/// </summary>
public sealed record ListQaAgentsV2QaAgentsGetRequest
{
    public QaAgentSubjectType? SubjectType { get; init; }

    [Minimum(1)]
    [Maximum(500)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
