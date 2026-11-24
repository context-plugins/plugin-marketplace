using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// Mode of the connections it creates: that of the key.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Live = new("live");

    public static readonly Mode Test = new("test");

    public TResult Match<TResult>(Func<TResult> onLive, Func<TResult> onTest, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Live => onLive(),
            _ when this == Test => onTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onLive, Action onTest, Action<string> otherwise)
    {
        if (this == Live) onLive();
        else if (this == Test) onTest();
        else otherwise(Value);
    }
}
