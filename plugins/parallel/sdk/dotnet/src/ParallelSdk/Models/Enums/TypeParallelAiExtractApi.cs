using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Type of warning. Note that adding new warning types is considered a backward-compatible change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeParallelAiExtractApi>))]
public sealed record TypeParallelAiExtractApi : OpenStringEnum<TypeParallelAiExtractApi>
{
    private TypeParallelAiExtractApi(string value) : base(value)
    {
    }

    public static readonly TypeParallelAiExtractApi SpecValidationWarning = new("spec_validation_warning");

    public static readonly TypeParallelAiExtractApi InputValidationWarning = new("input_validation_warning");

    public static readonly TypeParallelAiExtractApi Warning = new("warning");

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
