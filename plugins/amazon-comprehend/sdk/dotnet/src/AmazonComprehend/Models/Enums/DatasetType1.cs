using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Filter the datasets based on the dataset type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatasetType1>))]
public sealed record DatasetType1 : OpenStringEnum<DatasetType1>
{
    private DatasetType1(string value) : base(value)
    {
    }

    public static readonly DatasetType1 Train = new("TRAIN");

    public static readonly DatasetType1 Test = new("TEST");

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
