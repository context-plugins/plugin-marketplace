using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

/// <summary>
/// How the number was purchased — via the dashboard (<c>web</c>) or this API (<c>api</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PurchaseSource>))]
public sealed record PurchaseSource : OpenStringEnum<PurchaseSource>
{
    private PurchaseSource(string value) : base(value)
    {
    }

    public static readonly PurchaseSource Web = new("web");

    public static readonly PurchaseSource Api = new("api");

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
