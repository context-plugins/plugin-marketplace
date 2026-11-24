using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationLevelDto>))]
public sealed record NotificationLevelDto : OpenStringEnum<NotificationLevelDto>
{
    private NotificationLevelDto(string value) : base(value)
    {
    }

    public static readonly NotificationLevelDto Info = new("info");

    public static readonly NotificationLevelDto Warning = new("warning");

    public static readonly NotificationLevelDto Critical = new("critical");

    public static readonly NotificationLevelDto NotEvaluated = new("not_evaluated");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onWarning,
        Func<TResult> onCritical,
        Func<TResult> onNotEvaluated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Warning => onWarning(),
            _ when this == Critical => onCritical(),
            _ when this == NotEvaluated => onNotEvaluated(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo,
        Action onWarning,
        Action onCritical,
        Action onNotEvaluated,
        Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Warning) onWarning();
        else if (this == Critical) onCritical();
        else if (this == NotEvaluated) onNotEvaluated();
        else otherwise(Value);
    }
}
