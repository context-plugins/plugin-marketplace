using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeCallnodeIoOutboundCallsApi>))]
public sealed record TypeCallnodeIoOutboundCallsApi : OpenStringEnum<TypeCallnodeIoOutboundCallsApi>
{
    private TypeCallnodeIoOutboundCallsApi(string value) : base(value)
    {
    }

    public static readonly TypeCallnodeIoOutboundCallsApi None = new("none");

    public static readonly TypeCallnodeIoOutboundCallsApi Basic = new("basic");

    public static readonly TypeCallnodeIoOutboundCallsApi Bearer = new("bearer");

    public static readonly TypeCallnodeIoOutboundCallsApi Header = new("header");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBasic,
        Func<TResult> onBearer,
        Func<TResult> onHeader,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Basic => onBasic(),
            _ when this == Bearer => onBearer(),
            _ when this == Header => onHeader(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBasic, Action onBearer, Action onHeader, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Basic) onBasic();
        else if (this == Bearer) onBearer();
        else if (this == Header) onHeader();
        else otherwise(Value);
    }
}
