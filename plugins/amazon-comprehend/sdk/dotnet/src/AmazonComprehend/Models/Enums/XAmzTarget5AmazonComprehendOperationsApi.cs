using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AmazonComprehendOperationsApi>))]
public sealed record XAmzTarget5AmazonComprehendOperationsApi : OpenStringEnum<XAmzTarget5AmazonComprehendOperationsApi>
{
    private XAmzTarget5AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AmazonComprehendOperationsApi Comprehend20171127DetectPiiEntities = new(
        "Comprehend_20171127.DetectPiiEntities");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectPiiEntities,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectPiiEntities => onComprehend20171127DetectPiiEntities(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectPiiEntities, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectPiiEntities) onComprehend20171127DetectPiiEntities();
        else otherwise(Value);
    }
}
