using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity Info = new("info");

    public static readonly Severity Warning = new("warning");

    public static readonly Severity Error = new("error");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onWarning,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Warning => onWarning(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo, Action onWarning, Action onError, Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Warning) onWarning();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
