using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The model type. You need to set ModelType if you are creating a flywheel for a new model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModelType>))]
public sealed record ModelType : OpenStringEnum<ModelType>
{
    private ModelType(string value) : base(value)
    {
    }

    public static readonly ModelType DocumentClassifier = new("DOCUMENT_CLASSIFIER");

    public static readonly ModelType EntityRecognizer = new("ENTITY_RECOGNIZER");

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
