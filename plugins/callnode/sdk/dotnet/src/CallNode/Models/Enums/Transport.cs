using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

/// <summary>
/// Registration trunks are TLS-only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Transport>))]
public sealed record Transport : OpenStringEnum<Transport>
{
    private Transport(string value) : base(value)
    {
    }

    public static readonly Transport Tls = new("tls");

    public TResult Match<TResult>(Func<TResult> onTls, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Tls => onTls(),
            _ => otherwise(Value)
        };

    public void Match(Action onTls, Action<string> otherwise)
    {
        if (this == Tls) onTls();
        else otherwise(Value);
    }
}
