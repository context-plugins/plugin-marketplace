using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you don't specify, the default is train. TRAIN - all of the documents in the manifest will be used for training. If no test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for testing. TEST - all of the documents in the manifest will be used for testing.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Split>))]
public sealed record Split : OpenStringEnum<Split>
{
    private Split(string value) : base(value)
    {
    }

    public static readonly Split Train = new("TRAIN");

    public static readonly Split Test = new("TEST");

    public TResult Match<TResult>(Func<TResult> onTrain, Func<TResult> onTest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Train => onTrain(),
            _ when this == Test => onTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrain, Action onTest, Action<string> otherwise)
    {
        if (this == Train) onTrain();
        else if (this == Test) onTest();
        else otherwise(Value);
    }
}
