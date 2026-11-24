using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Status of the test.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status TestStatusUnspecified = new("TEST_STATUS_UNSPECIFIED");

    public static readonly Status Complete = new("COMPLETE");

    public static readonly Status InternalError = new("INTERNAL_ERROR");

    public static readonly Status PageUnreachable = new("PAGE_UNREACHABLE");

    public TResult Match<TResult>(Func<TResult> onTestStatusUnspecified,
        Func<TResult> onComplete,
        Func<TResult> onInternalError,
        Func<TResult> onPageUnreachable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TestStatusUnspecified => onTestStatusUnspecified(),
            _ when this == Complete => onComplete(),
            _ when this == InternalError => onInternalError(),
            _ when this == PageUnreachable => onPageUnreachable(),
            _ => otherwise(Value)
        };

    public void Match(Action onTestStatusUnspecified,
        Action onComplete,
        Action onInternalError,
        Action onPageUnreachable,
        Action<string> otherwise)
    {
        if (this == TestStatusUnspecified) onTestStatusUnspecified();
        else if (this == Complete) onComplete();
        else if (this == InternalError) onInternalError();
        else if (this == PageUnreachable) onPageUnreachable();
        else otherwise(Value);
    }
}
