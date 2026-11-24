using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

/// <summary>
/// Authenticated key environment used for this response. <c>test</c> means deterministic sandbox fixtures, never a live scrape.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EnvironmentEnum>))]
public sealed record EnvironmentEnum : OpenStringEnum<EnvironmentEnum>
{
    private EnvironmentEnum(string value) : base(value)
    {
    }

    public static readonly EnvironmentEnum Live = new("live");

    public static readonly EnvironmentEnum Test = new("test");

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
