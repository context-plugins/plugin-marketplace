using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The type of the AS path segment. The valid values are seq (an ordered AS_SEQUENCE) and set (an unordered AS_SET).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PathType>))]
public sealed record PathType : OpenStringEnum<PathType>
{
    private PathType(string value) : base(value)
    {
    }

    public static readonly PathType Seq = new("seq");

    public static readonly PathType Set = new("set");

    public TResult Match<TResult>(Func<TResult> onSeq, Func<TResult> onSet, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Seq => onSeq(),
            _ when this == Set => onSet(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeq, Action onSet, Action<string> otherwise)
    {
        if (this == Seq) onSeq();
        else if (this == Set) onSet();
        else otherwise(Value);
    }
}
