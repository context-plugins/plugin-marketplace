using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Wire-format type of the column values. Dimension columns use string; metric columns use float (cost, usage, saving, custom, and extended metrics) or integer (count aggregation). Time-series reports include a timestamp column.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type7DoiTReportsApi>))]
public sealed record Type7DoiTReportsApi : OpenStringEnum<Type7DoiTReportsApi>
{
    private Type7DoiTReportsApi(string value) : base(value)
    {
    }

    public static readonly Type7DoiTReportsApi String = new("string");

    public static readonly Type7DoiTReportsApi Float = new("float");

    public static readonly Type7DoiTReportsApi Integer = new("integer");

    public static readonly Type7DoiTReportsApi Timestamp = new("timestamp");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onFloat,
        Func<TResult> onInteger,
        Func<TResult> onTimestamp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Float => onFloat(),
            _ when this == Integer => onInteger(),
            _ when this == Timestamp => onTimestamp(),
            _ => otherwise(Value)
        };

    public void Match(Action onString, Action onFloat, Action onInteger, Action onTimestamp, Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Float) onFloat();
        else if (this == Integer) onInteger();
        else if (this == Timestamp) onTimestamp();
        else otherwise(Value);
    }
}
