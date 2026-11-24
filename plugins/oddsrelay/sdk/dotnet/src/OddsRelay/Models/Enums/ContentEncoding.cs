using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContentEncoding>))]
public sealed record ContentEncoding : OpenStringEnum<ContentEncoding>
{
    private ContentEncoding(string value) : base(value)
    {
    }

    public static readonly ContentEncoding Gzip = new("gzip");

    public TResult Match<TResult>(Func<TResult> onGzip, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gzip => onGzip(),
            _ => otherwise(Value)
        };

    public void Match(Action onGzip, Action<string> otherwise)
    {
        if (this == Gzip) onGzip();
        else otherwise(Value);
    }
}
