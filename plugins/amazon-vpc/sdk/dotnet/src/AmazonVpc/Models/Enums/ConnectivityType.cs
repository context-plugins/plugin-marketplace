using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// Indicates whether the NAT gateway supports public or private connectivity
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConnectivityType>))]
public sealed record ConnectivityType : OpenStringEnum<ConnectivityType>
{
    private ConnectivityType(string value) : base(value)
    {
    }

    public static readonly ConnectivityType Public = new("public");

    public static readonly ConnectivityType Private = new("private");

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
