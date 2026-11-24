using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The type of the dataset.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatasetTypeAmazonRekognitionProjectApi>))]
public sealed record DatasetTypeAmazonRekognitionProjectApi : OpenStringEnum<DatasetTypeAmazonRekognitionProjectApi>
{
    private DatasetTypeAmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly DatasetTypeAmazonRekognitionProjectApi Train = new("TRAIN");

    public static readonly DatasetTypeAmazonRekognitionProjectApi Test = new("TEST");

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
