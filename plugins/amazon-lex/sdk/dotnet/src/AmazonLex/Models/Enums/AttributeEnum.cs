using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The utterance attribute to sort by.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttributeEnum>))]
public sealed record AttributeEnum : OpenStringEnum<AttributeEnum>
{
    private AttributeEnum(string value) : base(value)
    {
    }

    public static readonly AttributeEnum HitCount = new("HitCount");

    public static readonly AttributeEnum MissedCount = new("MissedCount");

    public TResult Match<TResult>(Func<TResult> onHitCount,
        Func<TResult> onMissedCount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HitCount => onHitCount(),
            _ when this == MissedCount => onMissedCount(),
            _ => otherwise(Value)
        };

    public void Match(Action onHitCount, Action onMissedCount, Action<string> otherwise)
    {
        if (this == HitCount) onHitCount();
        else if (this == MissedCount) onMissedCount();
        else otherwise(Value);
    }
}
