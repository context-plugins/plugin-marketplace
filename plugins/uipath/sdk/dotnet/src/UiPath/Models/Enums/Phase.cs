using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Current phase of the automation in the pipeline
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Phase>))]
public sealed record Phase : OpenStringEnum<Phase>
{
    private Phase(string value) : base(value)
    {
    }

    public static readonly Phase Idea = new("Idea");

    public static readonly Phase Assessment = new("Assessment");

    public static readonly Phase Analysis = new("Analysis");

    public static readonly Phase Development = new("Development");

    public static readonly Phase Testing = new("Testing");

    public static readonly Phase Production = new("Production");

    public static readonly Phase OnHold = new("OnHold");

    public static readonly Phase Rejected = new("Rejected");

    public TResult Match<TResult>(Func<TResult> onIdea,
        Func<TResult> onAssessment,
        Func<TResult> onAnalysis,
        Func<TResult> onDevelopment,
        Func<TResult> onTesting,
        Func<TResult> onProduction,
        Func<TResult> onOnHold,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Idea => onIdea(),
            _ when this == Assessment => onAssessment(),
            _ when this == Analysis => onAnalysis(),
            _ when this == Development => onDevelopment(),
            _ when this == Testing => onTesting(),
            _ when this == Production => onProduction(),
            _ when this == OnHold => onOnHold(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onIdea,
        Action onAssessment,
        Action onAnalysis,
        Action onDevelopment,
        Action onTesting,
        Action onProduction,
        Action onOnHold,
        Action onRejected,
        Action<string> otherwise)
    {
        if (this == Idea) onIdea();
        else if (this == Assessment) onAssessment();
        else if (this == Analysis) onAnalysis();
        else if (this == Development) onDevelopment();
        else if (this == Testing) onTesting();
        else if (this == Production) onProduction();
        else if (this == OnHold) onOnHold();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
