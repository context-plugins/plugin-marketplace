using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// How the monitor presents its User-Agent. <c>auto</c> (default) identifies as RendexWatch and
/// retries once with a standard browser identity if the page looks blocked; <c>identify</c>
/// always identifies as RendexWatch and never falls back; <c>stealth</c> always presents a
/// standard browser identity. See https://rendex.dev/bot.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UaMode>))]
public sealed record UaMode : OpenStringEnum<UaMode>
{
    private UaMode(string value) : base(value)
    {
    }

    public static readonly UaMode Auto = new("auto");

    public static readonly UaMode Identify = new("identify");

    public static readonly UaMode Stealth = new("stealth");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onIdentify,
        Func<TResult> onStealth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Identify => onIdentify(),
            _ when this == Stealth => onStealth(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action onIdentify, Action onStealth, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Identify) onIdentify();
        else if (this == Stealth) onStealth();
        else otherwise(Value);
    }
}
