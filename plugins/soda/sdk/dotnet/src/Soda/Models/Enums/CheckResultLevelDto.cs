using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CheckResultLevelDto>))]
public sealed record CheckResultLevelDto : OpenStringEnum<CheckResultLevelDto>
{
    private CheckResultLevelDto(string value) : base(value)
    {
    }

    public static readonly CheckResultLevelDto Info = new("info");

    public static readonly CheckResultLevelDto Warning = new("warning");

    public static readonly CheckResultLevelDto Critical = new("critical");

    public static readonly CheckResultLevelDto NotEvaluated = new("not_evaluated");

    public static readonly CheckResultLevelDto Excluded = new("excluded");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onWarning,
        Func<TResult> onCritical,
        Func<TResult> onNotEvaluated,
        Func<TResult> onExcluded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Warning => onWarning(),
            _ when this == Critical => onCritical(),
            _ when this == NotEvaluated => onNotEvaluated(),
            _ when this == Excluded => onExcluded(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo,
        Action onWarning,
        Action onCritical,
        Action onNotEvaluated,
        Action onExcluded,
        Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Warning) onWarning();
        else if (this == Critical) onCritical();
        else if (this == NotEvaluated) onNotEvaluated();
        else if (this == Excluded) onExcluded();
        else otherwise(Value);
    }
}
