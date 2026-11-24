using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 Comprehend20171127CreateDataset = new("Comprehend_20171127.CreateDataset");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127CreateDataset, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127CreateDataset => onComprehend20171127CreateDataset(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127CreateDataset, Action<string> otherwise)
    {
        if (this == Comprehend20171127CreateDataset) onComprehend20171127CreateDataset();
        else otherwise(Value);
    }
}
