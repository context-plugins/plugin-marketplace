using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What kind of incident it was, which the AI risk scorecard counts: data_disclosure, sensitive_data, prompt_injection, fairness, wrong_output, outage, unauthorised_action or other
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category DataDisclosure = new("data_disclosure");

    public static readonly Category SensitiveData = new("sensitive_data");

    public static readonly Category PromptInjection = new("prompt_injection");

    public static readonly Category Fairness = new("fairness");

    public static readonly Category WrongOutput = new("wrong_output");

    public static readonly Category Outage = new("outage");

    public static readonly Category UnauthorisedAction = new("unauthorised_action");

    public static readonly Category Other = new("other");

    public TResult Match<TResult>(Func<TResult> onDataDisclosure,
        Func<TResult> onSensitiveData,
        Func<TResult> onPromptInjection,
        Func<TResult> onFairness,
        Func<TResult> onWrongOutput,
        Func<TResult> onOutage,
        Func<TResult> onUnauthorisedAction,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DataDisclosure => onDataDisclosure(),
            _ when this == SensitiveData => onSensitiveData(),
            _ when this == PromptInjection => onPromptInjection(),
            _ when this == Fairness => onFairness(),
            _ when this == WrongOutput => onWrongOutput(),
            _ when this == Outage => onOutage(),
            _ when this == UnauthorisedAction => onUnauthorisedAction(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onDataDisclosure,
        Action onSensitiveData,
        Action onPromptInjection,
        Action onFairness,
        Action onWrongOutput,
        Action onOutage,
        Action onUnauthorisedAction,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == DataDisclosure) onDataDisclosure();
        else if (this == SensitiveData) onSensitiveData();
        else if (this == PromptInjection) onPromptInjection();
        else if (this == Fairness) onFairness();
        else if (this == WrongOutput) onWrongOutput();
        else if (this == Outage) onOutage();
        else if (this == UnauthorisedAction) onUnauthorisedAction();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
