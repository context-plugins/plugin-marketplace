using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Required. The file format.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FileFormat>))]
public sealed record FileFormat : OpenStringEnum<FileFormat>
{
    private FileFormat(string value) : base(value)
    {
    }

    public static readonly FileFormat FileFormatUnspecified = new("FILE_FORMAT_UNSPECIFIED");

    public static readonly FileFormat Parquet = new("PARQUET");

    public TResult Match<TResult>(Func<TResult> onFileFormatUnspecified,
        Func<TResult> onParquet,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FileFormatUnspecified => onFileFormatUnspecified(),
            _ when this == Parquet => onParquet(),
            _ => otherwise(Value)
        };

    public void Match(Action onFileFormatUnspecified, Action onParquet, Action<string> otherwise)
    {
        if (this == FileFormatUnspecified) onFileFormatUnspecified();
        else if (this == Parquet) onParquet();
        else otherwise(Value);
    }
}
