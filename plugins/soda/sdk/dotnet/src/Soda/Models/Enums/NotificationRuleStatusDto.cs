using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationRuleStatusDto>))]
public sealed record NotificationRuleStatusDto : OpenStringEnum<NotificationRuleStatusDto>
{
    private NotificationRuleStatusDto(string value) : base(value)
    {
    }

    public static readonly NotificationRuleStatusDto Active = new("active");

    public static readonly NotificationRuleStatusDto Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onPaused, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
