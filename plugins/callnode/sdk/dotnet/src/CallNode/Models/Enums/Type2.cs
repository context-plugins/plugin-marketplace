using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 None = new("none");

    public static readonly Type2 Basic = new("basic");

    public static readonly Type2 Bearer = new("bearer");

    public static readonly Type2 Header = new("header");

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
