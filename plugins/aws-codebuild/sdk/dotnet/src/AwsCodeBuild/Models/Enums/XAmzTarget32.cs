using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget32>))]
public sealed record XAmzTarget32 : OpenStringEnum<XAmzTarget32>
{
    private XAmzTarget32(string value) : base(value)
    {
    }

    public static readonly XAmzTarget32 CodeBuild20161006InvalidateProjectCache = new(
        "CodeBuild_20161006.InvalidateProjectCache");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006InvalidateProjectCache,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CodeBuild20161006InvalidateProjectCache => onCodeBuild20161006InvalidateProjectCache(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006InvalidateProjectCache, Action<string> otherwise)
    {
        if (this == CodeBuild20161006InvalidateProjectCache) onCodeBuild20161006InvalidateProjectCache();
        else otherwise(Value);
    }
}
