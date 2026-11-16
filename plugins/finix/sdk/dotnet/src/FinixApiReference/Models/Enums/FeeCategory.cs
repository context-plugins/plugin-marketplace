using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The category of the fee.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeeCategory>))]
public sealed record FeeCategory : OpenStringEnum<FeeCategory>
{
    private FeeCategory(string value) : base(value)
    {
    }

    public static readonly FeeCategory Processor = new("PROCESSOR");

    public static readonly FeeCategory Interchange = new("INTERCHANGE");

    public static readonly FeeCategory DuesAndAssessments = new("DUES_AND_ASSESSMENTS");

    public static readonly FeeCategory ThirdPartyServiceProvider = new("THIRD_PARTY_SERVICE_PROVIDER");

    public TResult Match<TResult>(Func<TResult> onProcessor,
        Func<TResult> onInterchange,
        Func<TResult> onDuesAndAssessments,
        Func<TResult> onThirdPartyServiceProvider,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processor => onProcessor(),
            _ when this == Interchange => onInterchange(),
            _ when this == DuesAndAssessments => onDuesAndAssessments(),
            _ when this == ThirdPartyServiceProvider => onThirdPartyServiceProvider(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessor,
        Action onInterchange,
        Action onDuesAndAssessments,
        Action onThirdPartyServiceProvider,
        Action<string> otherwise)
    {
        if (this == Processor) onProcessor();
        else if (this == Interchange) onInterchange();
        else if (this == DuesAndAssessments) onDuesAndAssessments();
        else if (this == ThirdPartyServiceProvider) onThirdPartyServiceProvider();
        else otherwise(Value);
    }
}
