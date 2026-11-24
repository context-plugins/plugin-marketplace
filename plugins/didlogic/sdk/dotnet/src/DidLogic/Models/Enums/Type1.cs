using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Sip = new("sip");

    public static readonly Type1 Web = new("web");

    public static readonly Type1 Incoming = new("incoming");

    public static readonly Type1 Api = new("api");

    public TResult Match<TResult>(Func<TResult> onSip,
        Func<TResult> onWeb,
        Func<TResult> onIncoming,
        Func<TResult> onApi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sip => onSip(),
            _ when this == Web => onWeb(),
            _ when this == Incoming => onIncoming(),
            _ when this == Api => onApi(),
            _ => otherwise(Value)
        };

    public void Match(Action onSip, Action onWeb, Action onIncoming, Action onApi, Action<string> otherwise)
    {
        if (this == Sip) onSip();
        else if (this == Web) onWeb();
        else if (this == Incoming) onIncoming();
        else if (this == Api) onApi();
        else otherwise(Value);
    }
}
