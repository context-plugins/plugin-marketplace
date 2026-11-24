using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Model type of the flywheel's model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModelType1>))]
public sealed record ModelType1 : OpenStringEnum<ModelType1>
{
    private ModelType1(string value) : base(value)
    {
    }

    public static readonly ModelType1 DocumentClassifier = new("DOCUMENT_CLASSIFIER");

    public static readonly ModelType1 EntityRecognizer = new("ENTITY_RECOGNIZER");

    public TResult Match<TResult>(Func<TResult> onDocumentClassifier,
        Func<TResult> onEntityRecognizer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DocumentClassifier => onDocumentClassifier(),
            _ when this == EntityRecognizer => onEntityRecognizer(),
            _ => otherwise(Value)
        };

    public void Match(Action onDocumentClassifier, Action onEntityRecognizer, Action<string> otherwise)
    {
        if (this == DocumentClassifier) onDocumentClassifier();
        else if (this == EntityRecognizer) onEntityRecognizer();
        else otherwise(Value);
    }
}
