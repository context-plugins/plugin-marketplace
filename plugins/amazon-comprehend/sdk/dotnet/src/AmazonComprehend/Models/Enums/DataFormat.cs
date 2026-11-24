using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// COMPREHEND_CSV: The data format is a two-column CSV file, where the first column contains labels and the second column contains documents. AUGMENTED_MANIFEST: The data format
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataFormat>))]
public sealed record DataFormat : OpenStringEnum<DataFormat>
{
    private DataFormat(string value) : base(value)
    {
    }

    public static readonly DataFormat ComprehendCsv = new("COMPREHEND_CSV");

    public static readonly DataFormat AugmentedManifest = new("AUGMENTED_MANIFEST");

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
