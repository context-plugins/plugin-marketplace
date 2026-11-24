using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of build output artifact to create. Valid values include: NONE: CodeBuild creates the raw data in the output bucket. This is the default if packaging is not specified. ZIP: CodeBuild creates a ZIP file with the raw data in the output bucket.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Packaging1>))]
public sealed record Packaging1 : OpenStringEnum<Packaging1>
{
    private Packaging1(string value) : base(value)
    {
    }

    public static readonly Packaging1 Zip = new("ZIP");

    public static readonly Packaging1 None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onZip, Func<TResult> onNone, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Zip => onZip(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onZip, Action onNone, Action<string> otherwise)
    {
        if (this == Zip) onZip();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
