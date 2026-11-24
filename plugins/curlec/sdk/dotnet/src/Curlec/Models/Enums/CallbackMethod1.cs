using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Required when callback_url is set.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CallbackMethod1>))]
public sealed record CallbackMethod1 : OpenStringEnum<CallbackMethod1>
{
    private CallbackMethod1(string value) : base(value)
    {
    }

    public static readonly CallbackMethod1 Get = new("get");

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
