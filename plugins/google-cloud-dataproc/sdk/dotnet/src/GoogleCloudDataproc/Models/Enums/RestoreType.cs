using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The type of restore. If unspecified, defaults to METADATA_ONLY.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RestoreType>))]
public sealed record RestoreType : OpenStringEnum<RestoreType>
{
    private RestoreType(string value) : base(value)
    {
    }

    public static readonly RestoreType RestoreTypeUnspecified = new("RESTORE_TYPE_UNSPECIFIED");

    public static readonly RestoreType Full = new("FULL");

    public static readonly RestoreType MetadataOnly = new("METADATA_ONLY");

    public TResult Match<TResult>(Func<TResult> onRestoreTypeUnspecified,
        Func<TResult> onFull,
        Func<TResult> onMetadataOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RestoreTypeUnspecified => onRestoreTypeUnspecified(),
            _ when this == Full => onFull(),
            _ when this == MetadataOnly => onMetadataOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onRestoreTypeUnspecified, Action onFull, Action onMetadataOnly, Action<string> otherwise)
    {
        if (this == RestoreTypeUnspecified) onRestoreTypeUnspecified();
        else if (this == Full) onFull();
        else if (this == MetadataOnly) onMetadataOnly();
        else otherwise(Value);
    }
}
