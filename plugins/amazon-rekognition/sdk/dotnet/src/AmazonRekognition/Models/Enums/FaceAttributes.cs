using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The face attributes you want returned. DEFAULT - The following subset of facial attributes are returned: BoundingBox, Confidence, Pose, Quality and Landmarks. ALL - All facial attributes are returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FaceAttributes>))]
public sealed record FaceAttributes : OpenStringEnum<FaceAttributes>
{
    private FaceAttributes(string value) : base(value)
    {
    }

    public static readonly FaceAttributes Default = new("DEFAULT");

    public static readonly FaceAttributes All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onDefault, Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault, Action onAll, Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
