using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The value of SourceImageOrientationCorrection is always null. If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg imag
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SourceImageOrientationCorrection>))]
public sealed record SourceImageOrientationCorrection : OpenStringEnum<SourceImageOrientationCorrection>
{
    private SourceImageOrientationCorrection(string value) : base(value)
    {
    }

    public static readonly SourceImageOrientationCorrection Rotate0 = new("ROTATE_0");

    public static readonly SourceImageOrientationCorrection Rotate90 = new("ROTATE_90");

    public static readonly SourceImageOrientationCorrection Rotate180 = new("ROTATE_180");

    public static readonly SourceImageOrientationCorrection Rotate270 = new("ROTATE_270");

    public TResult Match<TResult>(Func<TResult> onRotate0,
        Func<TResult> onRotate90,
        Func<TResult> onRotate180,
        Func<TResult> onRotate270,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Rotate0 => onRotate0(),
            _ when this == Rotate90 => onRotate90(),
            _ when this == Rotate180 => onRotate180(),
            _ when this == Rotate270 => onRotate270(),
            _ => otherwise(Value)
        };

    public void Match(Action onRotate0,
        Action onRotate90,
        Action onRotate180,
        Action onRotate270,
        Action<string> otherwise)
    {
        if (this == Rotate0) onRotate0();
        else if (this == Rotate90) onRotate90();
        else if (this == Rotate180) onRotate180();
        else if (this == Rotate270) onRotate270();
        else otherwise(Value);
    }
}
