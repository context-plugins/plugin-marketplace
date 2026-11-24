using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The property that indicates which merging option is enabled in the source API association. Valid merge types are MANUAL_MERGE (default) and AUTO_MERGE. Manual merges are the default behavior and require the user to trigger any changes from the source APIs to the merged API manually. Auto merges subscribe the merged API to the changes performed on the source APIs so that any change in the source APIs are also made to the merged API. Auto merges use MergedApiExecutionRoleArn to perform merge operations.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MergeType>))]
public sealed record MergeType : OpenStringEnum<MergeType>
{
    private MergeType(string value) : base(value)
    {
    }

    public static readonly MergeType ManualMerge = new("MANUAL_MERGE");

    public static readonly MergeType AutoMerge = new("AUTO_MERGE");

    public TResult Match<TResult>(Func<TResult> onManualMerge,
        Func<TResult> onAutoMerge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ManualMerge => onManualMerge(),
            _ when this == AutoMerge => onAutoMerge(),
            _ => otherwise(Value)
        };

    public void Match(Action onManualMerge, Action onAutoMerge, Action<string> otherwise)
    {
        if (this == ManualMerge) onManualMerge();
        else if (this == AutoMerge) onAutoMerge();
        else otherwise(Value);
    }
}
