using Asana.Models;

namespace Asana.Requests.Rules;

/// <summary>
/// The inputs of the TriggerRule operation.
/// </summary>
public sealed record TriggerRuleRequest
{
    public required string RuleTriggerGid { get; init; }

    public required RuleTriggersRunRequest Body { get; init; }
}
