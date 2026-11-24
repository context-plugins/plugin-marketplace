using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt the definition. Alternatively, you can call DescribeStateMachine API with includedData = METADATA_ONLY to get a successful response without the encrypted definition.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IncludedData>))]
public sealed record IncludedData : OpenStringEnum<IncludedData>
{
    private IncludedData(string value) : base(value)
    {
    }

    public static readonly IncludedData AllData = new("ALL_DATA");

    public static readonly IncludedData MetadataOnly = new("METADATA_ONLY");

    public TResult Match<TResult>(Func<TResult> onAllData,
        Func<TResult> onMetadataOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllData => onAllData(),
            _ when this == MetadataOnly => onMetadataOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllData, Action onMetadataOnly, Action<string> otherwise)
    {
        if (this == AllData) onAllData();
        else if (this == MetadataOnly) onMetadataOnly();
        else otherwise(Value);
    }
}
