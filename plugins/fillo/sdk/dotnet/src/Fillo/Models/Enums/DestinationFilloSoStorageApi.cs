using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

/// <summary>
/// The destination pinned on the form. <c>none</c> means the form follows the workspace default.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DestinationFilloSoStorageApi>))]
public sealed record DestinationFilloSoStorageApi : OpenStringEnum<DestinationFilloSoStorageApi>
{
    private DestinationFilloSoStorageApi(string value) : base(value)
    {
    }

    public static readonly DestinationFilloSoStorageApi Gdrive = new("gdrive");

    public static readonly DestinationFilloSoStorageApi Box = new("box");

    public static readonly DestinationFilloSoStorageApi S3 = new("s3");

    public static readonly DestinationFilloSoStorageApi R2 = new("r2");

    public static readonly DestinationFilloSoStorageApi None = new("none");

    public TResult Match<TResult>(Func<TResult> onGdrive,
        Func<TResult> onBox,
        Func<TResult> onS3,
        Func<TResult> onR2,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gdrive => onGdrive(),
            _ when this == Box => onBox(),
            _ when this == S3 => onS3(),
            _ when this == R2 => onR2(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onGdrive, Action onBox, Action onS3, Action onR2, Action onNone, Action<string> otherwise)
    {
        if (this == Gdrive) onGdrive();
        else if (this == Box) onBox();
        else if (this == S3) onS3();
        else if (this == R2) onR2();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
