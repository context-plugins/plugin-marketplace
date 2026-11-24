using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Specifies whether the PII entity is redacted with the mask character or the entity type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MaskMode>))]
public sealed record MaskMode : OpenStringEnum<MaskMode>
{
    private MaskMode(string value) : base(value)
    {
    }

    public static readonly MaskMode Mask = new("MASK");

    public static readonly MaskMode ReplaceWithPiiEntityType = new("REPLACE_WITH_PII_ENTITY_TYPE");

    public TResult Match<TResult>(Func<TResult> onMask,
        Func<TResult> onReplaceWithPiiEntityType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mask => onMask(),
            _ when this == ReplaceWithPiiEntityType => onReplaceWithPiiEntityType(),
            _ => otherwise(Value)
        };

    public void Match(Action onMask, Action onReplaceWithPiiEntityType, Action<string> otherwise)
    {
        if (this == Mask) onMask();
        else if (this == ReplaceWithPiiEntityType) onReplaceWithPiiEntityType();
        else otherwise(Value);
    }
}
