using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget81>))]
public sealed record XAmzTarget81 : OpenStringEnum<XAmzTarget81>
{
    private XAmzTarget81(string value) : base(value)
    {
    }

    public static readonly XAmzTarget81 Comprehend20171127StopTrainingEntityRecognizer = new(
        "Comprehend_20171127.StopTrainingEntityRecognizer");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopTrainingEntityRecognizer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopTrainingEntityRecognizer => onComprehend20171127StopTrainingEntityRecognizer(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopTrainingEntityRecognizer, Action<string> otherwise)
    {
        if (this == Comprehend20171127StopTrainingEntityRecognizer) onComprehend20171127StopTrainingEntityRecognizer();
        else otherwise(Value);
    }
}
