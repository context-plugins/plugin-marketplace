using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The format of your training data: COMPREHEND_CSV: A CSV file that supplements your training documents. The CSV file contains information about the custom entities that your trained model will detect. The required format of the file depends on whether you are providing annotations or an entity list. If you use this value, you must provide your CSV file by using either the Annotations or EntityList parameters. You must provide your training documents by using the Documents parameter. AUGMENTED_MANIFEST: A labeled dataset that is produced by Amazon SageMaker Ground Truth. This file is in JSON lin
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataFormat2>))]
public sealed record DataFormat2 : OpenStringEnum<DataFormat2>
{
    private DataFormat2(string value) : base(value)
    {
    }

    public static readonly DataFormat2 ComprehendCsv = new("COMPREHEND_CSV");

    public static readonly DataFormat2 AugmentedManifest = new("AUGMENTED_MANIFEST");

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
