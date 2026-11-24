using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

/// <summary>
/// Where an upload would actually land right now — including Fillo's short-lived transit staging. null means uploads are blocked.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Resolved>))]
public sealed record Resolved : OpenStringEnum<Resolved>
{
    private Resolved(string value) : base(value)
    {
    }

    public static readonly Resolved Gdrive = new("gdrive");

    public static readonly Resolved S3 = new("s3");

    public static readonly Resolved Box = new("box");

    public static readonly Resolved Transit = new("transit");

    public TResult Match<TResult>(Func<TResult> onGdrive,
        Func<TResult> onS3,
        Func<TResult> onBox,
        Func<TResult> onTransit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gdrive => onGdrive(),
            _ when this == S3 => onS3(),
            _ when this == Box => onBox(),
            _ when this == Transit => onTransit(),
            _ => otherwise(Value)
        };

    public void Match(Action onGdrive, Action onS3, Action onBox, Action onTransit, Action<string> otherwise)
    {
        if (this == Gdrive) onGdrive();
        else if (this == S3) onS3();
        else if (this == Box) onBox();
        else if (this == Transit) onTransit();
        else otherwise(Value);
    }
}
