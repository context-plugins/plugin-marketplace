using System;
using System.Text.Json.Serialization;
using RocketReach.Core.Enum;

namespace RocketReach.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusEnum>))]
public sealed record StatusEnum : OpenStringEnum<StatusEnum>
{
    private StatusEnum(string value) : base(value)
    {
    }

    public static readonly StatusEnum Complete = new("complete");

    public static readonly StatusEnum Progress = new("progress");

    public static readonly StatusEnum Searching = new("searching");

    public static readonly StatusEnum NotQueued = new("not queued");

    public TResult Match<TResult>(Func<TResult> onComplete,
        Func<TResult> onProgress,
        Func<TResult> onSearching,
        Func<TResult> onNotQueued,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Complete => onComplete(),
            _ when this == Progress => onProgress(),
            _ when this == Searching => onSearching(),
            _ when this == NotQueued => onNotQueued(),
            _ => otherwise(Value)
        };

    public void Match(Action onComplete,
        Action onProgress,
        Action onSearching,
        Action onNotQueued,
        Action<string> otherwise)
    {
        if (this == Complete) onComplete();
        else if (this == Progress) onProgress();
        else if (this == Searching) onSearching();
        else if (this == NotQueued) onNotQueued();
        else otherwise(Value);
    }
}
