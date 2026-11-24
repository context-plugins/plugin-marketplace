using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The status used to filter reports. You can filter using one status only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>))]
public sealed record StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi : OpenStringEnum<StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>
{
    private StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Generating = new(
        "GENERATING");

    public static readonly StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Succeeded = new(
        "SUCCEEDED");

    public static readonly StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Failed = new(
        "FAILED");

    public static readonly StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Incomplete = new(
        "INCOMPLETE");

    public static readonly StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi Deleting = new(
        "DELETING");

    public TResult Match<TResult>(Func<TResult> onGenerating,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onIncomplete,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Generating => onGenerating(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Incomplete => onIncomplete(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onGenerating,
        Action onSucceeded,
        Action onFailed,
        Action onIncomplete,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == Generating) onGenerating();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Incomplete) onIncomplete();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
