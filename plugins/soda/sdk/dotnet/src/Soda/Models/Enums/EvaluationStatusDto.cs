using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EvaluationStatusDto>))]
public sealed record EvaluationStatusDto : OpenStringEnum<EvaluationStatusDto>
{
    private EvaluationStatusDto(string value) : base(value)
    {
    }

    public static readonly EvaluationStatusDto Pass = new("pass");

    public static readonly EvaluationStatusDto Warn = new("warn");

    public static readonly EvaluationStatusDto Fail = new("fail");

    public static readonly EvaluationStatusDto NotEvaluated = new("notEvaluated");

    public static readonly EvaluationStatusDto Excluded = new("excluded");

    public TResult Match<TResult>(Func<TResult> onPass,
        Func<TResult> onWarn,
        Func<TResult> onFail,
        Func<TResult> onNotEvaluated,
        Func<TResult> onExcluded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pass => onPass(),
            _ when this == Warn => onWarn(),
            _ when this == Fail => onFail(),
            _ when this == NotEvaluated => onNotEvaluated(),
            _ when this == Excluded => onExcluded(),
            _ => otherwise(Value)
        };

    public void Match(Action onPass,
        Action onWarn,
        Action onFail,
        Action onNotEvaluated,
        Action onExcluded,
        Action<string> otherwise)
    {
        if (this == Pass) onPass();
        else if (this == Warn) onWarn();
        else if (this == Fail) onFail();
        else if (this == NotEvaluated) onNotEvaluated();
        else if (this == Excluded) onExcluded();
        else otherwise(Value);
    }
}
