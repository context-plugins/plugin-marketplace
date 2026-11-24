using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Duplicated from onboarding config for self-check.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MerchantSubtype>))]
public sealed record MerchantSubtype : OpenStringEnum<MerchantSubtype>
{
    private MerchantSubtype(string value) : base(value)
    {
    }

    public static readonly MerchantSubtype FormalEducation = new("formal_education");

    public static readonly MerchantSubtype CoursesTraining = new("courses_training");

    public TResult Match<TResult>(Func<TResult> onFormalEducation,
        Func<TResult> onCoursesTraining,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FormalEducation => onFormalEducation(),
            _ when this == CoursesTraining => onCoursesTraining(),
            _ => otherwise(Value)
        };

    public void Match(Action onFormalEducation, Action onCoursesTraining, Action<string> otherwise)
    {
        if (this == FormalEducation) onFormalEducation();
        else if (this == CoursesTraining) onCoursesTraining();
        else otherwise(Value);
    }
}
