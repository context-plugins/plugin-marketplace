using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget36>))]
public sealed record XAmzTarget36 : OpenStringEnum<XAmzTarget36>
{
    private XAmzTarget36(string value) : base(value)
    {
    }

    public static readonly XAmzTarget36 Comprehend20171127DeleteResourcePolicy = new(
        "Comprehend_20171127.DeleteResourcePolicy");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DeleteResourcePolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DeleteResourcePolicy => onComprehend20171127DeleteResourcePolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DeleteResourcePolicy, Action<string> otherwise)
    {
        if (this == Comprehend20171127DeleteResourcePolicy) onComprehend20171127DeleteResourcePolicy();
        else otherwise(Value);
    }
}
