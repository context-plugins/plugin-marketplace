using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The export configuration type. Valid values are: S3: The report results are exported to an S3 bucket. NO_EXPORT: The report results are not exported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportConfigType>))]
public sealed record ExportConfigType : OpenStringEnum<ExportConfigType>
{
    private ExportConfigType(string value) : base(value)
    {
    }

    public static readonly ExportConfigType S3 = new("S3");

    public static readonly ExportConfigType NoExport = new("NO_EXPORT");

    public TResult Match<TResult>(Func<TResult> onS3, Func<TResult> onNoExport, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == S3 => onS3(),
            _ when this == NoExport => onNoExport(),
            _ => otherwise(Value)
        };

    public void Match(Action onS3, Action onNoExport, Action<string> otherwise)
    {
        if (this == S3) onS3();
        else if (this == NoExport) onNoExport();
        else otherwise(Value);
    }
}
