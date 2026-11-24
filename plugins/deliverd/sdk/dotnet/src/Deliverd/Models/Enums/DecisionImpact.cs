using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What its output feeds into
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DecisionImpact>))]
public sealed record DecisionImpact : OpenStringEnum<DecisionImpact>
{
    private DecisionImpact(string value) : base(value)
    {
    }

    public static readonly DecisionImpact None = new("none");

    public static readonly DecisionImpact Informs = new("informs");

    public static readonly DecisionImpact SupportsDecision = new("supports_decision");

    public static readonly DecisionImpact AutomatedDecision = new("automated_decision");

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
