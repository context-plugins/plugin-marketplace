using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LotSubStatus>))]
public sealed record LotSubStatus : OpenStringEnum<LotSubStatus>
{
    private LotSubStatus(string value) : base(value)
    {
    }

    public static readonly LotSubStatus Live = new("Live");

    public static readonly LotSubStatus Open = new("Open");

    public static readonly LotSubStatus Ended = new("Ended");

    public TResult Match<TResult>(Func<TResult> onLive,
        Func<TResult> onOpen,
        Func<TResult> onEnded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Live => onLive(),
            _ when this == Open => onOpen(),
            _ when this == Ended => onEnded(),
            _ => otherwise(Value)
        };

    public void Match(Action onLive, Action onOpen, Action onEnded, Action<string> otherwise)
    {
        if (this == Live) onLive();
        else if (this == Open) onOpen();
        else if (this == Ended) onEnded();
        else otherwise(Value);
    }
}
