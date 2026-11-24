using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type4>))]
public sealed record Type4 : OpenStringEnum<Type4>
{
    private Type4(string value) : base(value)
    {
    }

    public static readonly Type4 CompletionTypeUnspecified = new("COMPLETION_TYPE_UNSPECIFIED");

    public static readonly Type4 JobTitle = new("JOB_TITLE");

    public static readonly Type4 CompanyName = new("COMPANY_NAME");

    public static readonly Type4 Combined = new("COMBINED");

    public TResult Match<TResult>(Func<TResult> onCompletionTypeUnspecified,
        Func<TResult> onJobTitle,
        Func<TResult> onCompanyName,
        Func<TResult> onCombined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CompletionTypeUnspecified => onCompletionTypeUnspecified(),
            _ when this == JobTitle => onJobTitle(),
            _ when this == CompanyName => onCompanyName(),
            _ when this == Combined => onCombined(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompletionTypeUnspecified,
        Action onJobTitle,
        Action onCompanyName,
        Action onCombined,
        Action<string> otherwise)
    {
        if (this == CompletionTypeUnspecified) onCompletionTypeUnspecified();
        else if (this == JobTitle) onJobTitle();
        else if (this == CompanyName) onCompanyName();
        else if (this == Combined) onCombined();
        else otherwise(Value);
    }
}
