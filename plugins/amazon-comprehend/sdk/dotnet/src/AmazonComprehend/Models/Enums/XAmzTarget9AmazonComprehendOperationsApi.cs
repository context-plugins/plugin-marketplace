using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9AmazonComprehendOperationsApi>))]
public sealed record XAmzTarget9AmazonComprehendOperationsApi : OpenStringEnum<XAmzTarget9AmazonComprehendOperationsApi>
{
    private XAmzTarget9AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9AmazonComprehendOperationsApi Comprehend20171127DetectToxicContent = new(
        "Comprehend_20171127.DetectToxicContent");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectToxicContent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectToxicContent => onComprehend20171127DetectToxicContent(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectToxicContent, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectToxicContent) onComprehend20171127DetectToxicContent();
        else otherwise(Value);
    }
}
