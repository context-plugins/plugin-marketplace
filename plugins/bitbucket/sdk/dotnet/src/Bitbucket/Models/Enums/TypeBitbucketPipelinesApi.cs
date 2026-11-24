using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of selector.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeBitbucketPipelinesApi>))]
public sealed record TypeBitbucketPipelinesApi : OpenStringEnum<TypeBitbucketPipelinesApi>
{
    private TypeBitbucketPipelinesApi(string value) : base(value)
    {
    }

    public static readonly TypeBitbucketPipelinesApi Branches = new("branches");

    public static readonly TypeBitbucketPipelinesApi Tags = new("tags");

    public static readonly TypeBitbucketPipelinesApi Bookmarks = new("bookmarks");

    public static readonly TypeBitbucketPipelinesApi Default = new("default");

    public static readonly TypeBitbucketPipelinesApi Custom = new("custom");

    public TResult Match<TResult>(Func<TResult> onBranches,
        Func<TResult> onTags,
        Func<TResult> onBookmarks,
        Func<TResult> onDefault,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Branches => onBranches(),
            _ when this == Tags => onTags(),
            _ when this == Bookmarks => onBookmarks(),
            _ when this == Default => onDefault(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onBranches,
        Action onTags,
        Action onBookmarks,
        Action onDefault,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == Branches) onBranches();
        else if (this == Tags) onTags();
        else if (this == Bookmarks) onBookmarks();
        else if (this == Default) onDefault();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
