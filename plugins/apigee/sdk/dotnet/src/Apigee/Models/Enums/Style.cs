using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Style of ApiObservation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Style>))]
public sealed record Style : OpenStringEnum<Style>
{
    private Style(string value) : base(value)
    {
    }

    public static readonly Style StyleUnspecified = new("STYLE_UNSPECIFIED");

    public static readonly Style Rest = new("REST");

    public static readonly Style Grpc = new("GRPC");

    public static readonly Style Graphql = new("GRAPHQL");

    public TResult Match<TResult>(Func<TResult> onStyleUnspecified,
        Func<TResult> onRest,
        Func<TResult> onGrpc,
        Func<TResult> onGraphql,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StyleUnspecified => onStyleUnspecified(),
            _ when this == Rest => onRest(),
            _ when this == Grpc => onGrpc(),
            _ when this == Graphql => onGraphql(),
            _ => otherwise(Value)
        };

    public void Match(Action onStyleUnspecified,
        Action onRest,
        Action onGrpc,
        Action onGraphql,
        Action<string> otherwise)
    {
        if (this == StyleUnspecified) onStyleUnspecified();
        else if (this == Rest) onRest();
        else if (this == Grpc) onGrpc();
        else if (this == Graphql) onGraphql();
        else otherwise(Value);
    }
}
