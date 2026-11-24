using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusHudPlatformDataApi>))]
public sealed record StatusHudPlatformDataApi : OpenStringEnum<StatusHudPlatformDataApi>
{
    private StatusHudPlatformDataApi(string value) : base(value)
    {
    }

    public static readonly StatusHudPlatformDataApi Pending = new("pending");

    public static readonly StatusHudPlatformDataApi Ready = new("ready");

    public TResult Match<TResult>(Func<TResult> onPending, Func<TResult> onReady, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Ready => onReady(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onReady, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Ready) onReady();
        else otherwise(Value);
    }
}
