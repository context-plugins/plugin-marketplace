using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReasonAlphAiRestRadarApi>))]
public sealed record ReasonAlphAiRestRadarApi : OpenStringEnum<ReasonAlphAiRestRadarApi>
{
    private ReasonAlphAiRestRadarApi(string value) : base(value)
    {
    }

    public static readonly ReasonAlphAiRestRadarApi Disabled = new("disabled");

    public static readonly ReasonAlphAiRestRadarApi Missing = new("missing");

    public static readonly ReasonAlphAiRestRadarApi Stale = new("stale");

    public static readonly ReasonAlphAiRestRadarApi Future = new("future");

    public static readonly ReasonAlphAiRestRadarApi Invalid = new("invalid");

    public static readonly ReasonAlphAiRestRadarApi ReadFailed = new("read_failed");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onMissing,
        Func<TResult> onStale,
        Func<TResult> onFuture,
        Func<TResult> onInvalid,
        Func<TResult> onReadFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == Missing => onMissing(),
            _ when this == Stale => onStale(),
            _ when this == Future => onFuture(),
            _ when this == Invalid => onInvalid(),
            _ when this == ReadFailed => onReadFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled,
        Action onMissing,
        Action onStale,
        Action onFuture,
        Action onInvalid,
        Action onReadFailed,
        Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == Missing) onMissing();
        else if (this == Stale) onStale();
        else if (this == Future) onFuture();
        else if (this == Invalid) onInvalid();
        else if (this == ReadFailed) onReadFailed();
        else otherwise(Value);
    }
}
