using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The dataset type (training data or test data).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatasetType2>))]
public sealed record DatasetType2 : OpenStringEnum<DatasetType2>
{
    private DatasetType2(string value) : base(value)
    {
    }

    public static readonly DatasetType2 Train = new("TRAIN");

    public static readonly DatasetType2 Test = new("TEST");

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
