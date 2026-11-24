using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget75>))]
public sealed record XAmzTarget75 : OpenStringEnum<XAmzTarget75>
{
    private XAmzTarget75(string value) : base(value)
    {
    }

    public static readonly XAmzTarget75 Comprehend20171127ImportModel = new("Comprehend_20171127.ImportModel");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ImportModel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ImportModel => onComprehend20171127ImportModel(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ImportModel, Action<string> otherwise)
    {
        if (this == Comprehend20171127ImportModel) onComprehend20171127ImportModel();
        else otherwise(Value);
    }
}
