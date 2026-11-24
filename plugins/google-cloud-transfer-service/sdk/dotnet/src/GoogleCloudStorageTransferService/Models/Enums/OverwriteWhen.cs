using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OverwriteWhen>))]
public sealed record OverwriteWhen : OpenStringEnum<OverwriteWhen>
{
    private OverwriteWhen(string value) : base(value)
    {
    }

    public static readonly OverwriteWhen OverwriteWhenUnspecified = new("OVERWRITE_WHEN_UNSPECIFIED");

    public static readonly OverwriteWhen Different = new("DIFFERENT");

    public static readonly OverwriteWhen Never = new("NEVER");

    public static readonly OverwriteWhen Always = new("ALWAYS");

    public TResult Match<TResult>(Func<TResult> onOverwriteWhenUnspecified,
        Func<TResult> onDifferent,
        Func<TResult> onNever,
        Func<TResult> onAlways,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OverwriteWhenUnspecified => onOverwriteWhenUnspecified(),
            _ when this == Different => onDifferent(),
            _ when this == Never => onNever(),
            _ when this == Always => onAlways(),
            _ => otherwise(Value)
        };

    public void Match(Action onOverwriteWhenUnspecified,
        Action onDifferent,
        Action onNever,
        Action onAlways,
        Action<string> otherwise)
    {
        if (this == OverwriteWhenUnspecified) onOverwriteWhenUnspecified();
        else if (this == Different) onDifferent();
        else if (this == Never) onNever();
        else if (this == Always) onAlways();
        else otherwise(Value);
    }
}
