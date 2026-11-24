using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// hypothesis, test, evidence, finding, conclusion, recommendation, decision, risk, question or action. A decision is recorded as a suggestion until a person confirms it
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind8>))]
public sealed record Kind8 : OpenStringEnum<Kind8>
{
    private Kind8(string value) : base(value)
    {
    }

    public static readonly Kind8 Hypothesis = new("hypothesis");

    public static readonly Kind8 Test = new("test");

    public static readonly Kind8 Evidence = new("evidence");

    public static readonly Kind8 Finding = new("finding");

    public static readonly Kind8 Conclusion = new("conclusion");

    public static readonly Kind8 Recommendation = new("recommendation");

    public static readonly Kind8 Decision = new("decision");

    public static readonly Kind8 Risk = new("risk");

    public static readonly Kind8 Question = new("question");

    public static readonly Kind8 Action = new("action");

    public TResult Match<TResult>(Func<TResult> onHypothesis,
        Func<TResult> onTest,
        Func<TResult> onEvidence,
        Func<TResult> onFinding,
        Func<TResult> onConclusion,
        Func<TResult> onRecommendation,
        Func<TResult> onDecision,
        Func<TResult> onRisk,
        Func<TResult> onQuestion,
        Func<TResult> onAction,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hypothesis => onHypothesis(),
            _ when this == Test => onTest(),
            _ when this == Evidence => onEvidence(),
            _ when this == Finding => onFinding(),
            _ when this == Conclusion => onConclusion(),
            _ when this == Recommendation => onRecommendation(),
            _ when this == Decision => onDecision(),
            _ when this == Risk => onRisk(),
            _ when this == Question => onQuestion(),
            _ when this == Action => onAction(),
            _ => otherwise(Value)
        };

    public void Match(Action onHypothesis,
        Action onTest,
        Action onEvidence,
        Action onFinding,
        Action onConclusion,
        Action onRecommendation,
        Action onDecision,
        Action onRisk,
        Action onQuestion,
        Action onAction,
        Action<string> otherwise)
    {
        if (this == Hypothesis) onHypothesis();
        else if (this == Test) onTest();
        else if (this == Evidence) onEvidence();
        else if (this == Finding) onFinding();
        else if (this == Conclusion) onConclusion();
        else if (this == Recommendation) onRecommendation();
        else if (this == Decision) onDecision();
        else if (this == Risk) onRisk();
        else if (this == Question) onQuestion();
        else if (this == Action) onAction();
        else otherwise(Value);
    }
}
