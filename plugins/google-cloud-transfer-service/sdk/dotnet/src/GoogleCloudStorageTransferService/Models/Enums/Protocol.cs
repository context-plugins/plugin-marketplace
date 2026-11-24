using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Protocol>))]
public sealed record Protocol : OpenStringEnum<Protocol>
{
    private Protocol(string value) : base(value)
    {
    }

    public static readonly Protocol NetworkProtocolUnspecified = new("NETWORK_PROTOCOL_UNSPECIFIED");

    public static readonly Protocol NetworkProtocolHttps = new("NETWORK_PROTOCOL_HTTPS");

    public static readonly Protocol NetworkProtocolHttp = new("NETWORK_PROTOCOL_HTTP");

    public TResult Match<TResult>(Func<TResult> onNetworkProtocolUnspecified,
        Func<TResult> onNetworkProtocolHttps,
        Func<TResult> onNetworkProtocolHttp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NetworkProtocolUnspecified => onNetworkProtocolUnspecified(),
            _ when this == NetworkProtocolHttps => onNetworkProtocolHttps(),
            _ when this == NetworkProtocolHttp => onNetworkProtocolHttp(),
            _ => otherwise(Value)
        };

    public void Match(Action onNetworkProtocolUnspecified,
        Action onNetworkProtocolHttps,
        Action onNetworkProtocolHttp,
        Action<string> otherwise)
    {
        if (this == NetworkProtocolUnspecified) onNetworkProtocolUnspecified();
        else if (this == NetworkProtocolHttps) onNetworkProtocolHttps();
        else if (this == NetworkProtocolHttp) onNetworkProtocolHttp();
        else otherwise(Value);
    }
}
