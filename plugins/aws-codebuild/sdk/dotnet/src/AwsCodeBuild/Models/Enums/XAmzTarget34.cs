using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget34>))]
public sealed record XAmzTarget34 : OpenStringEnum<XAmzTarget34>
{
    private XAmzTarget34(string value) : base(value)
    {
    }

    public static readonly XAmzTarget34 CodeBuild20161006ListCuratedEnvironmentImages = new(
        "CodeBuild_20161006.ListCuratedEnvironmentImages");

    public TResult Match<TResult>(Func<TResult> onCodeBuild20161006ListCuratedEnvironmentImages,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                CodeBuild20161006ListCuratedEnvironmentImages => onCodeBuild20161006ListCuratedEnvironmentImages(),
            _ => otherwise(Value)
        };

    public void Match(Action onCodeBuild20161006ListCuratedEnvironmentImages, Action<string> otherwise)
    {
        if (this == CodeBuild20161006ListCuratedEnvironmentImages) onCodeBuild20161006ListCuratedEnvironmentImages();
        else otherwise(Value);
    }
}
