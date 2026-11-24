using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OrderByBundleSocialPostApi>))]
public sealed record OrderByBundleSocialPostApi : OpenStringEnum<OrderByBundleSocialPostApi>
{
    private OrderByBundleSocialPostApi(string value) : base(value)
    {
    }

    public static readonly OrderByBundleSocialPostApi CreatedAt = new("createdAt");

    public static readonly OrderByBundleSocialPostApi UpdatedAt = new("updatedAt");

    public static readonly OrderByBundleSocialPostApi PostDate = new("postDate");

    public static readonly OrderByBundleSocialPostApi PostedDate = new("postedDate");

    public static readonly OrderByBundleSocialPostApi DeletedAt = new("deletedAt");

    public TResult Match<TResult>(Func<TResult> onCreatedAt,
        Func<TResult> onUpdatedAt,
        Func<TResult> onPostDate,
        Func<TResult> onPostedDate,
        Func<TResult> onDeletedAt,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == UpdatedAt => onUpdatedAt(),
            _ when this == PostDate => onPostDate(),
            _ when this == PostedDate => onPostedDate(),
            _ when this == DeletedAt => onDeletedAt(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAt,
        Action onUpdatedAt,
        Action onPostDate,
        Action onPostedDate,
        Action onDeletedAt,
        Action<string> otherwise)
    {
        if (this == CreatedAt) onCreatedAt();
        else if (this == UpdatedAt) onUpdatedAt();
        else if (this == PostDate) onPostDate();
        else if (this == PostedDate) onPostedDate();
        else if (this == DeletedAt) onDeletedAt();
        else otherwise(Value);
    }
}
