using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The dataset type. You can specify that the data in a dataset is for training the model or for testing the model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatasetType>))]
public sealed record DatasetType : OpenStringEnum<DatasetType>
{
    private DatasetType(string value) : base(value)
    {
    }

    public static readonly DatasetType Train = new("TRAIN");

    public static readonly DatasetType Test = new("TEST");

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
