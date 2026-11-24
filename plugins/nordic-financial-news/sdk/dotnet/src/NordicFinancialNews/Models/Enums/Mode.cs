using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Semantic = new("semantic");

    public TResult Match<TResult>(Func<TResult> onSemantic, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Semantic => onSemantic(),
            _ => otherwise(Value)
        };

    public void Match(Action onSemantic, Action<string> otherwise)
    {
        if (this == Semantic) onSemantic();
        else otherwise(Value);
    }
}
