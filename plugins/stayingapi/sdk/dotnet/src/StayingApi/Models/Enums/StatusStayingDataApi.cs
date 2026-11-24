using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusStayingDataApi>))]
public sealed record StatusStayingDataApi : OpenStringEnum<StatusStayingDataApi>
{
    private StatusStayingDataApi(string value) : base(value)
    {
    }

    public static readonly StatusStayingDataApi Ok = new("ok");

    public static readonly StatusStayingDataApi Failed = new("failed");

    public static readonly StatusStayingDataApi Skipped = new("skipped");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onFailed,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Failed => onFailed(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onFailed, Action onSkipped, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Failed) onFailed();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
