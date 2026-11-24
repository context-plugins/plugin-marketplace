using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EndpointProtocol>))]
public sealed record EndpointProtocol : OpenStringEnum<EndpointProtocol>
{
    private EndpointProtocol(string value) : base(value)
    {
    }

    public static readonly EndpointProtocol EndpointProtocolUnspecified = new("ENDPOINT_PROTOCOL_UNSPECIFIED");

    public static readonly EndpointProtocol Thrift = new("THRIFT");

    public static readonly EndpointProtocol Grpc = new("GRPC");

    public TResult Match<TResult>(Func<TResult> onEndpointProtocolUnspecified,
        Func<TResult> onThrift,
        Func<TResult> onGrpc,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EndpointProtocolUnspecified => onEndpointProtocolUnspecified(),
            _ when this == Thrift => onThrift(),
            _ when this == Grpc => onGrpc(),
            _ => otherwise(Value)
        };

    public void Match(Action onEndpointProtocolUnspecified, Action onThrift, Action onGrpc, Action<string> otherwise)
    {
        if (this == EndpointProtocolUnspecified) onEndpointProtocolUnspecified();
        else if (this == Thrift) onThrift();
        else if (this == Grpc) onGrpc();
        else otherwise(Value);
    }
}
