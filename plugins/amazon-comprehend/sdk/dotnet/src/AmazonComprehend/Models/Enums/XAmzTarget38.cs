using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget38>))]
public sealed record XAmzTarget38 : OpenStringEnum<XAmzTarget38>
{
    private XAmzTarget38(string value) : base(value)
    {
    }

    public static readonly XAmzTarget38 Comprehend20171127PutResourcePolicy = new(
        "Comprehend_20171127.PutResourcePolicy");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127PutResourcePolicy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127PutResourcePolicy => onComprehend20171127PutResourcePolicy(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127PutResourcePolicy, Action<string> otherwise)
    {
        if (this == Comprehend20171127PutResourcePolicy) onComprehend20171127PutResourcePolicy();
        else otherwise(Value);
    }
}
