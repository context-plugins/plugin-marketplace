using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// The protocol used by this target server.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Protocol1>))]
public sealed record Protocol1 : OpenStringEnum<Protocol1>
{
    private Protocol1(string value) : base(value)
    {
    }

    public static readonly Protocol1 ProtocolUnspecified = new("PROTOCOL_UNSPECIFIED");

    public static readonly Protocol1 Http = new("HTTP");

    public static readonly Protocol1 Http2 = new("HTTP2");

    public static readonly Protocol1 GrpcTarget = new("GRPC_TARGET");

    public static readonly Protocol1 Grpc = new("GRPC");

    public static readonly Protocol1 ExternalCallout = new("EXTERNAL_CALLOUT");

    public TResult Match<TResult>(Func<TResult> onProtocolUnspecified,
        Func<TResult> onHttp,
        Func<TResult> onHttp2,
        Func<TResult> onGrpcTarget,
        Func<TResult> onGrpc,
        Func<TResult> onExternalCallout,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ProtocolUnspecified => onProtocolUnspecified(),
            _ when this == Http => onHttp(),
            _ when this == Http2 => onHttp2(),
            _ when this == GrpcTarget => onGrpcTarget(),
            _ when this == Grpc => onGrpc(),
            _ when this == ExternalCallout => onExternalCallout(),
            _ => otherwise(Value)
        };

    public void Match(Action onProtocolUnspecified,
        Action onHttp,
        Action onHttp2,
        Action onGrpcTarget,
        Action onGrpc,
        Action onExternalCallout,
        Action<string> otherwise)
    {
        if (this == ProtocolUnspecified) onProtocolUnspecified();
        else if (this == Http) onHttp();
        else if (this == Http2) onHttp2();
        else if (this == GrpcTarget) onGrpcTarget();
        else if (this == Grpc) onGrpc();
        else if (this == ExternalCallout) onExternalCallout();
        else otherwise(Value);
    }
}
