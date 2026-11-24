using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget80>))]
public sealed record XAmzTarget80 : OpenStringEnum<XAmzTarget80>
{
    private XAmzTarget80(string value) : base(value)
    {
    }

    public static readonly XAmzTarget80 Comprehend20171127StopTrainingDocumentClassifier = new(
        "Comprehend_20171127.StopTrainingDocumentClassifier");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopTrainingDocumentClassifier,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopTrainingDocumentClassifier => onComprehend20171127StopTrainingDocumentClassifier(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopTrainingDocumentClassifier, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127StopTrainingDocumentClassifier) onComprehend20171127StopTrainingDocumentClassifier();
        else otherwise(Value);
    }
}
