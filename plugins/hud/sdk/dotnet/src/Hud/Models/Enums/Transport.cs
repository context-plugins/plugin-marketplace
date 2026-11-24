using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Transport>))]
public sealed record Transport : OpenStringEnum<Transport>
{
    private Transport(string value) : base(value)
    {
    }

    public static readonly Transport Http = new("http");

    public static readonly Transport Stdio = new("stdio");

    public static readonly Transport Channel = new("channel");

    public TResult Match<TResult>(Func<TResult> onHttp,
        Func<TResult> onStdio,
        Func<TResult> onChannel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Http => onHttp(),
            _ when this == Stdio => onStdio(),
            _ when this == Channel => onChannel(),
            _ => otherwise(Value)
        };

    public void Match(Action onHttp, Action onStdio, Action onChannel, Action<string> otherwise)
    {
        if (this == Http) onHttp();
        else if (this == Stdio) onStdio();
        else if (this == Channel) onChannel();
        else otherwise(Value);
    }
}
