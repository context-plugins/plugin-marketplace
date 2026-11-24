using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CallbackMethod>))]
public sealed record CallbackMethod : OpenStringEnum<CallbackMethod>
{
    private CallbackMethod(string value) : base(value)
    {
    }

    public static readonly CallbackMethod Get = new("get");

    public TResult Match<TResult>(Func<TResult> onGet, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Get => onGet(),
            _ => otherwise(Value)
        };

    public void Match(Action onGet, Action<string> otherwise)
    {
        if (this == Get) onGet();
        else otherwise(Value);
    }
}
