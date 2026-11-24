using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Along with path and name, the pattern that CodeBuild uses to determine the name and location to store the output artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type is set to S3, valid values include: BUILD_ID: Include the build ID in the location of the build output artifact. NONE: Do not include the build ID. This is the default if namespaceType is not specified. F
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NamespaceType>))]
public sealed record NamespaceType : OpenStringEnum<NamespaceType>
{
    private NamespaceType(string value) : base(value)
    {
    }

    public static readonly NamespaceType None = new("NONE");

    public static readonly NamespaceType BuildId = new("BUILD_ID");

    public TResult Match<TResult>(Func<TResult> onNone, Func<TResult> onBuildId, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == BuildId => onBuildId(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onBuildId, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == BuildId) onBuildId();
        else otherwise(Value);
    }
}
