using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GroupByDiagnosticsV4GroupByOutcomeDto>))]
public sealed record GroupByDiagnosticsV4GroupByOutcomeDto : OpenStringEnum<GroupByDiagnosticsV4GroupByOutcomeDto>
{
    private GroupByDiagnosticsV4GroupByOutcomeDto(string value) : base(value)
    {
    }

    public static readonly GroupByDiagnosticsV4GroupByOutcomeDto Pass = new("pass");

    public static readonly GroupByDiagnosticsV4GroupByOutcomeDto Warn = new("warn");

    public static readonly GroupByDiagnosticsV4GroupByOutcomeDto Fail = new("fail");

    public TResult Match<TResult>(Func<TResult> onPass,
        Func<TResult> onWarn,
        Func<TResult> onFail,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pass => onPass(),
            _ when this == Warn => onWarn(),
            _ when this == Fail => onFail(),
            _ => otherwise(Value)
        };

    public void Match(Action onPass, Action onWarn, Action onFail, Action<string> otherwise)
    {
        if (this == Pass) onPass();
        else if (this == Warn) onWarn();
        else if (this == Fail) onFail();
        else otherwise(Value);
    }
}
