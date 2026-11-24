using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Encoding>))]
public sealed record Encoding : OpenStringEnum<Encoding>
{
    private Encoding(string value) : base(value)
    {
    }

    public static readonly Encoding Utf8 = new("utf8");

    public static readonly Encoding Base64 = new("base64");

    public TResult Match<TResult>(Func<TResult> onUtf8, Func<TResult> onBase64, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Utf8 => onUtf8(),
            _ when this == Base64 => onBase64(),
            _ => otherwise(Value)
        };

    public void Match(Action onUtf8, Action onBase64, Action<string> otherwise)
    {
        if (this == Utf8) onUtf8();
        else if (this == Base64) onBase64();
        else otherwise(Value);
    }
}
