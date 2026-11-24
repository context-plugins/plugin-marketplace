using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// If your collection is associated with a face detection model that's later than version 3.0, the value of OrientationCorrection is always null and no orientation information is returned. If your collection is associated with a face detection model that's version 3.0 or earlier, the following applies: If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are translated to represent object locations
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrientationCorrection2>))]
public sealed record OrientationCorrection2 : OpenStringEnum<OrientationCorrection2>
{
    private OrientationCorrection2(string value) : base(value)
    {
    }

    public static readonly OrientationCorrection2 Rotate0 = new("ROTATE_0");

    public static readonly OrientationCorrection2 Rotate90 = new("ROTATE_90");

    public static readonly OrientationCorrection2 Rotate180 = new("ROTATE_180");

    public static readonly OrientationCorrection2 Rotate270 = new("ROTATE_270");

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
