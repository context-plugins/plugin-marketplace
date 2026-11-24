using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PurchaseSource1>))]
public sealed record PurchaseSource1 : OpenStringEnum<PurchaseSource1>
{
    private PurchaseSource1(string value) : base(value)
    {
    }

    public static readonly PurchaseSource1 Web = new("web");

    public static readonly PurchaseSource1 Api = new("api");

    public TResult Match<TResult>(Func<TResult> onWeb, Func<TResult> onApi, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Web => onWeb(),
            _ when this == Api => onApi(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeb, Action onApi, Action<string> otherwise)
    {
        if (this == Web) onWeb();
        else if (this == Api) onApi();
        else otherwise(Value);
    }
}
