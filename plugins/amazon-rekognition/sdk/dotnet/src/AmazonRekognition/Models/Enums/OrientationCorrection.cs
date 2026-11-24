using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Support for estimating image orientation using the the OrientationCorrection field has ceased as of August 2021. Any returned values for this field included in an API response will always be NULL. The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct the orientation. The bounding box coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations before the image orientation is corrected. If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that inclu
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrientationCorrection>))]
public sealed record OrientationCorrection : OpenStringEnum<OrientationCorrection>
{
    private OrientationCorrection(string value) : base(value)
    {
    }

    public static readonly OrientationCorrection Rotate0 = new("ROTATE_0");

    public static readonly OrientationCorrection Rotate90 = new("ROTATE_90");

    public static readonly OrientationCorrection Rotate180 = new("ROTATE_180");

    public static readonly OrientationCorrection Rotate270 = new("ROTATE_270");

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
