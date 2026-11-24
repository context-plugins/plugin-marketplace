using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of cache used by the build project. Valid values include: NO_CACHE: The build project does not use any cache. S3: The build project reads and writes from and to S3. LOCAL: The build project stores a cache locally on a build host that is only available to that build host.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>))]
public sealed record Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi : OpenStringEnum<Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>
{
    private Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(string value) : base(value)
    {
    }

    public static readonly Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi NoCache = new(
        "NO_CACHE");

    public static readonly Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi S3 = new("S3");

    public static readonly Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi Local = new("LOCAL");

    public TResult Match<TResult>(Func<TResult> onNoCache,
        Func<TResult> onS3,
        Func<TResult> onLocal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoCache => onNoCache(),
            _ when this == S3 => onS3(),
            _ when this == Local => onLocal(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoCache, Action onS3, Action onLocal, Action<string> otherwise)
    {
        if (this == NoCache) onNoCache();
        else if (this == S3) onS3();
        else if (this == Local) onLocal();
        else otherwise(Value);
    }
}
