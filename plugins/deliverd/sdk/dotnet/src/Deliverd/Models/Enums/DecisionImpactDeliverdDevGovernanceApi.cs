using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DecisionImpactDeliverdDevGovernanceApi>))]
public sealed record DecisionImpactDeliverdDevGovernanceApi : OpenStringEnum<DecisionImpactDeliverdDevGovernanceApi>
{
    private DecisionImpactDeliverdDevGovernanceApi(string value) : base(value)
    {
    }

    public static readonly DecisionImpactDeliverdDevGovernanceApi None = new("none");

    public static readonly DecisionImpactDeliverdDevGovernanceApi Informs = new("informs");

    public static readonly DecisionImpactDeliverdDevGovernanceApi SupportsDecision = new("supports_decision");

    public static readonly DecisionImpactDeliverdDevGovernanceApi AutomatedDecision = new("automated_decision");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onInforms,
        Func<TResult> onSupportsDecision,
        Func<TResult> onAutomatedDecision,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Informs => onInforms(),
            _ when this == SupportsDecision => onSupportsDecision(),
            _ when this == AutomatedDecision => onAutomatedDecision(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onInforms,
        Action onSupportsDecision,
        Action onAutomatedDecision,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Informs) onInforms();
        else if (this == SupportsDecision) onSupportsDecision();
        else if (this == AutomatedDecision) onAutomatedDecision();
        else otherwise(Value);
    }
}
