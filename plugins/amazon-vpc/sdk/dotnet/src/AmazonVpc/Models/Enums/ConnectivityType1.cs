using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ConnectivityType1>))]
public sealed record ConnectivityType1 : OpenStringEnum<ConnectivityType1>
{
    private ConnectivityType1(string value) : base(value)
    {
    }

    public static readonly ConnectivityType1 Public = new("public");

    public static readonly ConnectivityType1 Private = new("private");

    public TResult Match<TResult>(Func<TResult> onPublic, Func<TResult> onPrivate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Private => onPrivate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onPrivate, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Private) onPrivate();
        else otherwise(Value);
    }
}
