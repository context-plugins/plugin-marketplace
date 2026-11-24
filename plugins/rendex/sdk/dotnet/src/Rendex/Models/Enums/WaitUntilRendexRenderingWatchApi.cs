using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WaitUntilRendexRenderingWatchApi>))]
public sealed record WaitUntilRendexRenderingWatchApi : OpenStringEnum<WaitUntilRendexRenderingWatchApi>
{
    private WaitUntilRendexRenderingWatchApi(string value) : base(value)
    {
    }

    public static readonly WaitUntilRendexRenderingWatchApi Load = new("load");

    public static readonly WaitUntilRendexRenderingWatchApi Domcontentloaded = new("domcontentloaded");

    public static readonly WaitUntilRendexRenderingWatchApi Networkidle0 = new("networkidle0");

    public static readonly WaitUntilRendexRenderingWatchApi Networkidle2 = new("networkidle2");

    public TResult Match<TResult>(Func<TResult> onLoad,
        Func<TResult> onDomcontentloaded,
        Func<TResult> onNetworkidle0,
        Func<TResult> onNetworkidle2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Load => onLoad(),
            _ when this == Domcontentloaded => onDomcontentloaded(),
            _ when this == Networkidle0 => onNetworkidle0(),
            _ when this == Networkidle2 => onNetworkidle2(),
            _ => otherwise(Value)
        };

    public void Match(Action onLoad,
        Action onDomcontentloaded,
        Action onNetworkidle0,
        Action onNetworkidle2,
        Action<string> otherwise)
    {
        if (this == Load) onLoad();
        else if (this == Domcontentloaded) onDomcontentloaded();
        else if (this == Networkidle0) onNetworkidle0();
        else if (this == Networkidle2) onNetworkidle2();
        else otherwise(Value);
    }
}
