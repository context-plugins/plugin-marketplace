using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DataStandardStatusDto>))]
public sealed record DataStandardStatusDto : OpenStringEnum<DataStandardStatusDto>
{
    private DataStandardStatusDto(string value) : base(value)
    {
    }

    public static readonly DataStandardStatusDto Draft = new("draft");

    public static readonly DataStandardStatusDto Active = new("active");

    public static readonly DataStandardStatusDto Paused = new("paused");

    public static readonly DataStandardStatusDto Invalid = new("invalid");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onPaused,
        Func<TResult> onInvalid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ when this == Invalid => onInvalid(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onPaused, Action onInvalid, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else if (this == Invalid) onInvalid();
        else otherwise(Value);
    }
}
