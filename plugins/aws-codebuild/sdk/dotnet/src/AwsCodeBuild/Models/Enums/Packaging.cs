using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of build output artifact to create: If type is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output artifacts instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type is set to S3, valid values include: NONE: CodeBuild creates in the output bucket a folder that contains the build output. This is the default if packaging is not specified. ZIP: CodeBuild creates in the output bucket a ZIP file that contains the build output.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Packaging>))]
public sealed record Packaging : OpenStringEnum<Packaging>
{
    private Packaging(string value) : base(value)
    {
    }

    public static readonly Packaging None = new("NONE");

    public static readonly Packaging Zip = new("ZIP");

    public TResult Match<TResult>(Func<TResult> onNone, Func<TResult> onZip, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Zip => onZip(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onZip, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Zip) onZip();
        else otherwise(Value);
    }
}
