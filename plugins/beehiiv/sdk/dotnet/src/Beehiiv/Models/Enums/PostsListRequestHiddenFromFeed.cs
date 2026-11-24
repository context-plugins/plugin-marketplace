using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostsListRequestHiddenFromFeed>))]
public sealed record PostsListRequestHiddenFromFeed : OpenStringEnum<PostsListRequestHiddenFromFeed>
{
    private PostsListRequestHiddenFromFeed(string value) : base(value)
    {
    }

    public static readonly PostsListRequestHiddenFromFeed All = new("all");

    public static readonly PostsListRequestHiddenFromFeed True = new("true");

    public static readonly PostsListRequestHiddenFromFeed False = new("false");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onTrue,
        Func<TResult> onFalse,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
