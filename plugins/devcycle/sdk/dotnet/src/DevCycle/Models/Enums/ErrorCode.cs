using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// OpenFeature compatible error code. See https://openfeature.dev/specification/types#error-code
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorCode>))]
public sealed record ErrorCode : OpenStringEnum<ErrorCode>
{
    private ErrorCode(string value) : base(value)
    {
    }

    public static readonly ErrorCode ParseError = new("PARSE_ERROR");

    public static readonly ErrorCode TargetingKeyMissing = new("TARGETING_KEY_MISSING");

    public static readonly ErrorCode InvalidContext = new("INVALID_CONTEXT");

    public static readonly ErrorCode General = new("GENERAL");

    public TResult Match<TResult>(Func<TResult> onParseError,
        Func<TResult> onTargetingKeyMissing,
        Func<TResult> onInvalidContext,
        Func<TResult> onGeneral,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ParseError => onParseError(),
            _ when this == TargetingKeyMissing => onTargetingKeyMissing(),
            _ when this == InvalidContext => onInvalidContext(),
            _ when this == General => onGeneral(),
            _ => otherwise(Value)
        };

    public void Match(Action onParseError,
        Action onTargetingKeyMissing,
        Action onInvalidContext,
        Action onGeneral,
        Action<string> otherwise)
    {
        if (this == ParseError) onParseError();
        else if (this == TargetingKeyMissing) onTargetingKeyMissing();
        else if (this == InvalidContext) onInvalidContext();
        else if (this == General) onGeneral();
        else otherwise(Value);
    }
}
