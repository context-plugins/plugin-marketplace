using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort Relevance = new("relevance");

    public static readonly Sort Latest = new("latest");

    public TResult Match<TResult>(Func<TResult> onRelevance, Func<TResult> onLatest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Relevance => onRelevance(),
            _ when this == Latest => onLatest(),
            _ => otherwise(Value)
        };

    public void Match(Action onRelevance, Action onLatest, Action<string> otherwise)
    {
        if (this == Relevance) onRelevance();
        else if (this == Latest) onLatest();
        else otherwise(Value);
    }
}
