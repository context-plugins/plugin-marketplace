using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Required. The table format.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TableFormat>))]
public sealed record TableFormat : OpenStringEnum<TableFormat>
{
    private TableFormat(string value) : base(value)
    {
    }

    public static readonly TableFormat TableFormatUnspecified = new("TABLE_FORMAT_UNSPECIFIED");

    public static readonly TableFormat Iceberg = new("ICEBERG");

    public TResult Match<TResult>(Func<TResult> onTableFormatUnspecified,
        Func<TResult> onIceberg,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TableFormatUnspecified => onTableFormatUnspecified(),
            _ when this == Iceberg => onIceberg(),
            _ => otherwise(Value)
        };

    public void Match(Action onTableFormatUnspecified, Action onIceberg, Action<string> otherwise)
    {
        if (this == TableFormatUnspecified) onTableFormatUnspecified();
        else if (this == Iceberg) onIceberg();
        else otherwise(Value);
    }
}
