using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// The campaign objective
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Objective>))]
public sealed record Objective : OpenStringEnum<Objective>
{
    private Objective(string value) : base(value)
    {
    }

    public static readonly Objective OutcomeAwareness = new("OUTCOME_AWARENESS");

    public static readonly Objective OutcomeEngagement = new("OUTCOME_ENGAGEMENT");

    public static readonly Objective OutcomeLeads = new("OUTCOME_LEADS");

    public static readonly Objective OutcomeSales = new("OUTCOME_SALES");

    public static readonly Objective OutcomeTraffic = new("OUTCOME_TRAFFIC");

    public static readonly Objective OutcomeAppPromotion = new("OUTCOME_APP_PROMOTION");

    public TResult Match<TResult>(Func<TResult> onOutcomeAwareness,
        Func<TResult> onOutcomeEngagement,
        Func<TResult> onOutcomeLeads,
        Func<TResult> onOutcomeSales,
        Func<TResult> onOutcomeTraffic,
        Func<TResult> onOutcomeAppPromotion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OutcomeAwareness => onOutcomeAwareness(),
            _ when this == OutcomeEngagement => onOutcomeEngagement(),
            _ when this == OutcomeLeads => onOutcomeLeads(),
            _ when this == OutcomeSales => onOutcomeSales(),
            _ when this == OutcomeTraffic => onOutcomeTraffic(),
            _ when this == OutcomeAppPromotion => onOutcomeAppPromotion(),
            _ => otherwise(Value)
        };

    public void Match(Action onOutcomeAwareness,
        Action onOutcomeEngagement,
        Action onOutcomeLeads,
        Action onOutcomeSales,
        Action onOutcomeTraffic,
        Action onOutcomeAppPromotion,
        Action<string> otherwise)
    {
        if (this == OutcomeAwareness) onOutcomeAwareness();
        else if (this == OutcomeEngagement) onOutcomeEngagement();
        else if (this == OutcomeLeads) onOutcomeLeads();
        else if (this == OutcomeSales) onOutcomeSales();
        else if (this == OutcomeTraffic) onOutcomeTraffic();
        else if (this == OutcomeAppPromotion) onOutcomeAppPromotion();
        else otherwise(Value);
    }
}
