using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeCallnodeIoPhoneNumbersApi>))]
public sealed record TypeCallnodeIoPhoneNumbersApi : OpenStringEnum<TypeCallnodeIoPhoneNumbersApi>
{
    private TypeCallnodeIoPhoneNumbersApi(string value) : base(value)
    {
    }

    public static readonly TypeCallnodeIoPhoneNumbersApi Basic = new("basic");

    public static readonly TypeCallnodeIoPhoneNumbersApi Bearer = new("bearer");

    public static readonly TypeCallnodeIoPhoneNumbersApi Header = new("header");

    public TResult Match<TResult>(Func<TResult> onBasic,
        Func<TResult> onBearer,
        Func<TResult> onHeader,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Basic => onBasic(),
            _ when this == Bearer => onBearer(),
            _ when this == Header => onHeader(),
            _ => otherwise(Value)
        };

    public void Match(Action onBasic, Action onBearer, Action onHeader, Action<string> otherwise)
    {
        if (this == Basic) onBasic();
        else if (this == Bearer) onBearer();
        else if (this == Header) onHeader();
        else otherwise(Value);
    }
}
