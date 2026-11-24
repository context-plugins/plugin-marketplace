using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EgressTransport>))]
public sealed record EgressTransport : OpenStringEnum<EgressTransport>
{
    private EgressTransport(string value) : base(value)
    {
    }

    public static readonly EgressTransport Udp = new("udp");

    public static readonly EgressTransport Tcp = new("tcp");

    public static readonly EgressTransport Tls = new("tls");

    public TResult Match<TResult>(Func<TResult> onUdp,
        Func<TResult> onTcp,
        Func<TResult> onTls,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Udp => onUdp(),
            _ when this == Tcp => onTcp(),
            _ when this == Tls => onTls(),
            _ => otherwise(Value)
        };

    public void Match(Action onUdp, Action onTcp, Action onTls, Action<string> otherwise)
    {
        if (this == Udp) onUdp();
        else if (this == Tcp) onTcp();
        else if (this == Tls) onTls();
        else otherwise(Value);
    }
}
