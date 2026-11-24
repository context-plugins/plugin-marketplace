using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Call type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Sip = new("sip");

    public static readonly TypeEnum Incoming = new("incoming");

    public static readonly TypeEnum Web = new("web");

    public static readonly TypeEnum Api = new("api");

    public TResult Match<TResult>(Func<TResult> onSip,
        Func<TResult> onIncoming,
        Func<TResult> onWeb,
        Func<TResult> onApi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sip => onSip(),
            _ when this == Incoming => onIncoming(),
            _ when this == Web => onWeb(),
            _ when this == Api => onApi(),
            _ => otherwise(Value)
        };

    public void Match(Action onSip, Action onIncoming, Action onWeb, Action onApi, Action<string> otherwise)
    {
        if (this == Sip) onSip();
        else if (this == Incoming) onIncoming();
        else if (this == Web) onWeb();
        else if (this == Api) onApi();
        else otherwise(Value);
    }
}
