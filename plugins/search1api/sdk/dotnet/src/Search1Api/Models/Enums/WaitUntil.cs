using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WaitUntil>))]
public sealed record WaitUntil : OpenStringEnum<WaitUntil>
{
    private WaitUntil(string value) : base(value)
    {
    }

    public static readonly WaitUntil Domcontentloaded = new("domcontentloaded");

    public static readonly WaitUntil Load = new("load");

    public static readonly WaitUntil Networkidle = new("networkidle");

    public TResult Match<TResult>(Func<TResult> onDomcontentloaded,
        Func<TResult> onLoad,
        Func<TResult> onNetworkidle,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Domcontentloaded => onDomcontentloaded(),
            _ when this == Load => onLoad(),
            _ when this == Networkidle => onNetworkidle(),
            _ => otherwise(Value)
        };

    public void Match(Action onDomcontentloaded, Action onLoad, Action onNetworkidle, Action<string> otherwise)
    {
        if (this == Domcontentloaded) onDomcontentloaded();
        else if (this == Load) onLoad();
        else if (this == Networkidle) onNetworkidle();
        else otherwise(Value);
    }
}
