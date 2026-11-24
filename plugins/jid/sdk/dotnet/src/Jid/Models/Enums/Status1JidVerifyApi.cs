using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1JidVerifyApi>))]
public sealed record Status1JidVerifyApi : OpenStringEnum<Status1JidVerifyApi>
{
    private Status1JidVerifyApi(string value) : base(value)
    {
    }

    public static readonly Status1JidVerifyApi Active = new("active");

    public static readonly Status1JidVerifyApi Attention = new("attention");

    public static readonly Status1JidVerifyApi Inactive = new("inactive");

    public static readonly Status1JidVerifyApi Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onAttention,
        Func<TResult> onInactive,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Attention => onAttention(),
            _ when this == Inactive => onInactive(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onAttention,
        Action onInactive,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Attention) onAttention();
        else if (this == Inactive) onInactive();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
