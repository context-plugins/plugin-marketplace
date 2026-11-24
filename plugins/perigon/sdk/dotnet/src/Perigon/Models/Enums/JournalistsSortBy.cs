using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JournalistsSortBy>))]
public sealed record JournalistsSortBy : OpenStringEnum<JournalistsSortBy>
{
    private JournalistsSortBy(string value) : base(value)
    {
    }

    public static readonly JournalistsSortBy AvgMonthlyPosts = new("avgMonthlyPosts");

    public static readonly JournalistsSortBy LinkedinConnections = new("linkedinConnections");

    public static readonly JournalistsSortBy LinkedinFollowers = new("linkedinFollowers");

    public TResult Match<TResult>(Func<TResult> onAvgMonthlyPosts,
        Func<TResult> onLinkedinConnections,
        Func<TResult> onLinkedinFollowers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AvgMonthlyPosts => onAvgMonthlyPosts(),
            _ when this == LinkedinConnections => onLinkedinConnections(),
            _ when this == LinkedinFollowers => onLinkedinFollowers(),
            _ => otherwise(Value)
        };

    public void Match(Action onAvgMonthlyPosts,
        Action onLinkedinConnections,
        Action onLinkedinFollowers,
        Action<string> otherwise)
    {
        if (this == AvgMonthlyPosts) onAvgMonthlyPosts();
        else if (this == LinkedinConnections) onLinkedinConnections();
        else if (this == LinkedinFollowers) onLinkedinFollowers();
        else otherwise(Value);
    }
}
