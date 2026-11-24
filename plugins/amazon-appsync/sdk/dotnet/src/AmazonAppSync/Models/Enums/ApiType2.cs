using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApiType2>))]
public sealed record ApiType2 : OpenStringEnum<ApiType2>
{
    private ApiType2(string value) : base(value)
    {
    }

    public static readonly ApiType2 Graphql = new("GRAPHQL");

    public static readonly ApiType2 Merged = new("MERGED");

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
