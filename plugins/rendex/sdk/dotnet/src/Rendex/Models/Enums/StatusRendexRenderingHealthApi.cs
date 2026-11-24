using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusRendexRenderingHealthApi>))]
public sealed record StatusRendexRenderingHealthApi : OpenStringEnum<StatusRendexRenderingHealthApi>
{
    private StatusRendexRenderingHealthApi(string value) : base(value)
    {
    }

    public static readonly StatusRendexRenderingHealthApi Ok = new("ok");

    public static readonly StatusRendexRenderingHealthApi Error = new("error");

    public TResult Match<TResult>(Func<TResult> onOk, Func<TResult> onError, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onError, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
