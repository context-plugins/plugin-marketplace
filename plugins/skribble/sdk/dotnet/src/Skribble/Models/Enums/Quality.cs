using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Quality>))]
public sealed record Quality : OpenStringEnum<Quality>
{
    private Quality(string value) : base(value)
    {
    }

    public static readonly Quality Ses = new("SES");

    public static readonly Quality Aes = new("AES");

    public static readonly Quality Qes = new("QES");

    public TResult Match<TResult>(Func<TResult> onSes,
        Func<TResult> onAes,
        Func<TResult> onQes,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ses => onSes(),
            _ when this == Aes => onAes(),
            _ when this == Qes => onQes(),
            _ => otherwise(Value)
        };

    public void Match(Action onSes, Action onAes, Action onQes, Action<string> otherwise)
    {
        if (this == Ses) onSes();
        else if (this == Aes) onAes();
        else if (this == Qes) onQes();
        else otherwise(Value);
    }
}
