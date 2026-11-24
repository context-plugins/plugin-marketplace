using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The format of your training data: COMPREHEND_CSV: A two-column CSV file, where labels are provided in the first column, and documents are provided in the second. If you use this value, you must provide the S3Uri parameter in your request. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON object that contains a training document and its associated labels. If you use this value, you must provide the AugmentedManifests parameter in your request. If you don't specify a value, Amazon Comprehend us
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataFormat1>))]
public sealed record DataFormat1 : OpenStringEnum<DataFormat1>
{
    private DataFormat1(string value) : base(value)
    {
    }

    public static readonly DataFormat1 ComprehendCsv = new("COMPREHEND_CSV");

    public static readonly DataFormat1 AugmentedManifest = new("AUGMENTED_MANIFEST");

    public TResult Match<TResult>(Func<TResult> onComprehendCsv,
        Func<TResult> onAugmentedManifest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ComprehendCsv => onComprehendCsv(),
            _ when this == AugmentedManifest => onAugmentedManifest(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehendCsv, Action onAugmentedManifest, Action<string> otherwise)
    {
        if (this == ComprehendCsv) onComprehendCsv();
        else if (this == AugmentedManifest) onAugmentedManifest();
        else otherwise(Value);
    }
}
