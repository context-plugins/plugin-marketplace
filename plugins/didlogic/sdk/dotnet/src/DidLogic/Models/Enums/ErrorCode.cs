using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Normalized lookup error code: 000 — OK, 113 — Internal service error, 121 — Invalid phone number length or format, 199 — Unexpected error. null when no result is available yet.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorCode>))]
public sealed record ErrorCode : OpenStringEnum<ErrorCode>
{
    private ErrorCode(string value) : base(value)
    {
    }

    public static readonly ErrorCode _000 = new("000");

    public static readonly ErrorCode _113 = new("113");

    public static readonly ErrorCode _121 = new("121");

    public static readonly ErrorCode _199 = new("199");

    public TResult Match<TResult>(Func<TResult> on_000,
        Func<TResult> on_113,
        Func<TResult> on_121,
        Func<TResult> on_199,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _000 => on_000(),
            _ when this == _113 => on_113(),
            _ when this == _121 => on_121(),
            _ when this == _199 => on_199(),
            _ => otherwise(Value)
        };

    public void Match(Action on_000, Action on_113, Action on_121, Action on_199, Action<string> otherwise)
    {
        if (this == _000) on_000();
        else if (this == _113) on_113();
        else if (this == _121) on_121();
        else if (this == _199) on_199();
        else otherwise(Value);
    }
}
