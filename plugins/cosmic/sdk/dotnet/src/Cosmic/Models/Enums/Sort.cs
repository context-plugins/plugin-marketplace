using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Enum;

namespace Cosmic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Sort>))]
public sealed record Sort : OpenStringEnum<Sort>
{
    private Sort(string value) : base(value)
    {
    }

    public static readonly Sort CreatedAt = new("created_at");

    public static readonly Sort CreatedAt2 = new("-created_at");

    public static readonly Sort ModifiedAt = new("modified_at");

    public static readonly Sort ModifiedAt2 = new("-modified_at");

    public static readonly Sort Random = new("random");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onCreatedAt2,
        Func<TResult> onModifiedAt,
        Func<TResult> onModifiedAt2,
        Func<TResult> onRandom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == CreatedAt2 => onCreatedAt2(),
            _ when this == ModifiedAt => onModifiedAt(),
            _ when this == ModifiedAt2 => onModifiedAt2(),
            _ when this == Random => onRandom(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt,
        Action onCreatedAt2,
        Action onModifiedAt,
        Action onModifiedAt2,
        Action onRandom,
        Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == CreatedAt2) onCreatedAt2();
        else if (this == ModifiedAt) onModifiedAt();
        else if (this == ModifiedAt2) onModifiedAt2();
        else if (this == Random) onRandom();
        else otherwise(Value);
    }
}
