using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderByHightouchDestinationsApi>))]
public sealed record OrderByHightouchDestinationsApi : OpenStringEnum<OrderByHightouchDestinationsApi>
{
    private OrderByHightouchDestinationsApi(string value) : base(value)
    {
    }

    public static readonly OrderByHightouchDestinationsApi Id = new("id");

    public static readonly OrderByHightouchDestinationsApi Name = new("name");

    public static readonly OrderByHightouchDestinationsApi Slug = new("slug");

    public static readonly OrderByHightouchDestinationsApi CreatedAt = new("createdAt");

    public static readonly OrderByHightouchDestinationsApi UpdatedAt = new("updatedAt");

    public TResult Match<TResult>(Func<TResult> onId,
        Func<TResult> onName,
        Func<TResult> onSlug,
        Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Id => onId(),
            _ when this == Name => onName(),
            _ when this == Slug => onSlug(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onId,
        Action onName,
        Action onSlug,
        Action onCreatedAt,
        Action onUpdatedAt,
        Action<string> otherwise)
    {
        if (this == Id) onId();
        else if (this == Name) onName();
        else if (this == Slug) onSlug();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else otherwise(Value);
    }
}
