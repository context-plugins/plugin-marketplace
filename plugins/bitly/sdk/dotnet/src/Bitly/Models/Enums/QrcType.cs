using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<QrcType>))]
public sealed record QrcType : OpenStringEnum<QrcType>
{
    private QrcType(string value) : base(value)
    {
    }

    public static readonly QrcType Bitlink = new("bitlink");

    public static readonly QrcType LongUrl = new("long_url");

    public TResult Match<TResult>(Func<TResult> onBitlink, Func<TResult> onLongUrl, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bitlink => onBitlink(),
            _ when this == LongUrl => onLongUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onBitlink, Action onLongUrl, Action<string> otherwise)
    {
        if (this == Bitlink) onBitlink();
        else if (this == LongUrl) onLongUrl();
        else otherwise(Value);
    }
}
