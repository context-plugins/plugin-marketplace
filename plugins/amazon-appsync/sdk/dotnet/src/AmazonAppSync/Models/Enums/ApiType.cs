using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The value that indicates whether the GraphQL API is a standard API (GRAPHQL) or merged API (MERGED).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiType>))]
public sealed record ApiType : OpenStringEnum<ApiType>
{
    private ApiType(string value) : base(value)
    {
    }

    public static readonly ApiType Graphql = new("GRAPHQL");

    public static readonly ApiType Merged = new("MERGED");

    public TResult Match<TResult>(Func<TResult> onGraphql, Func<TResult> onMerged, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Graphql => onGraphql(),
            _ when this == Merged => onMerged(),
            _ => otherwise(Value)
        };

    public void Match(Action onGraphql, Action onMerged, Action<string> otherwise)
    {
        if (this == Graphql) onGraphql();
        else if (this == Merged) onMerged();
        else otherwise(Value);
    }
}
