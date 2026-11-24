using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Determines the level of strictness when validating mocked results against their respective API models. Values include: STRICT: All required fields must be present, and all present fields must conform to the API's schema. PRESENT: All present fields must conform to the API's schema. NONE: No validation is performed. If no value is specified, the default value is STRICT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FieldValidationMode>))]
public sealed record FieldValidationMode : OpenStringEnum<FieldValidationMode>
{
    private FieldValidationMode(string value) : base(value)
    {
    }

    public static readonly FieldValidationMode Strict = new("STRICT");

    public static readonly FieldValidationMode Present = new("PRESENT");

    public static readonly FieldValidationMode None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onStrict,
        Func<TResult> onPresent,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Strict => onStrict(),
            _ when this == Present => onPresent(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onStrict, Action onPresent, Action onNone, Action<string> otherwise)
    {
        if (this == Strict) onStrict();
        else if (this == Present) onPresent();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
