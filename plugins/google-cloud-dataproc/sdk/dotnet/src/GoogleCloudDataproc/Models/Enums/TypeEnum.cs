using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. The type of restore.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum RestoreTypeUnspecified = new("RESTORE_TYPE_UNSPECIFIED");

    public static readonly TypeEnum Full = new("FULL");

    public static readonly TypeEnum MetadataOnly = new("METADATA_ONLY");

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
