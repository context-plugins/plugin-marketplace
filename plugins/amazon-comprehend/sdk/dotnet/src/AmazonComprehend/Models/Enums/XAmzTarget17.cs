using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 Comprehend20171127ListDatasets = new("Comprehend_20171127.ListDatasets");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListDatasets, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListDatasets => onComprehend20171127ListDatasets(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListDatasets, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListDatasets) onComprehend20171127ListDatasets();
        else otherwise(Value);
    }
}
