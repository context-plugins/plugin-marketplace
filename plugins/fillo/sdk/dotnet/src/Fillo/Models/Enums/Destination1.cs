using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Destination1>))]
public sealed record Destination1 : OpenStringEnum<Destination1>
{
    private Destination1(string value) : base(value)
    {
    }

    public static readonly Destination1 Gdrive = new("gdrive");

    public static readonly Destination1 Box = new("box");

    public static readonly Destination1 S3 = new("s3");

    public static readonly Destination1 R2 = new("r2");

    public static readonly Destination1 Transit = new("transit");

    public static readonly Destination1 None = new("none");

    public TResult Match<TResult>(Func<TResult> onGdrive,
        Func<TResult> onBox,
        Func<TResult> onS3,
        Func<TResult> onR2,
        Func<TResult> onTransit,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gdrive => onGdrive(),
            _ when this == Box => onBox(),
            _ when this == S3 => onS3(),
            _ when this == R2 => onR2(),
            _ when this == Transit => onTransit(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onGdrive,
        Action onBox,
        Action onS3,
        Action onR2,
        Action onTransit,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Gdrive) onGdrive();
        else if (this == Box) onBox();
        else if (this == S3) onS3();
        else if (this == R2) onR2();
        else if (this == Transit) onTransit();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
