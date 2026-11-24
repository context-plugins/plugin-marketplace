using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Type of warning. Note that adding new warning types is considered a backward-compatible change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2ParallelAiTasksApi>))]
public sealed record Type2ParallelAiTasksApi : OpenStringEnum<Type2ParallelAiTasksApi>
{
    private Type2ParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly Type2ParallelAiTasksApi SpecValidationWarning = new("spec_validation_warning");

    public static readonly Type2ParallelAiTasksApi InputValidationWarning = new("input_validation_warning");

    public static readonly Type2ParallelAiTasksApi Warning = new("warning");

    public TResult Match<TResult>(Func<TResult> onSpecValidationWarning,
        Func<TResult> onInputValidationWarning,
        Func<TResult> onWarning,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SpecValidationWarning => onSpecValidationWarning(),
            _ when this == InputValidationWarning => onInputValidationWarning(),
            _ when this == Warning => onWarning(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpecValidationWarning,
        Action onInputValidationWarning,
        Action onWarning,
        Action<string> otherwise)
    {
        if (this == SpecValidationWarning) onSpecValidationWarning();
        else if (this == InputValidationWarning) onInputValidationWarning();
        else if (this == Warning) onWarning();
        else otherwise(Value);
    }
}
