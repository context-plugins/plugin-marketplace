using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RcaReportStatusDto>))]
public sealed record RcaReportStatusDto : OpenStringEnum<RcaReportStatusDto>
{
    private RcaReportStatusDto(string value) : base(value)
    {
    }

    public static readonly RcaReportStatusDto Completed = new("completed");

    public static readonly RcaReportStatusDto Partial = new("partial");

    public static readonly RcaReportStatusDto Inconclusive = new("inconclusive");

    public static readonly RcaReportStatusDto Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onPartial,
        Func<TResult> onInconclusive,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Partial => onPartial(),
            _ when this == Inconclusive => onInconclusive(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onPartial,
        Action onInconclusive,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Partial) onPartial();
        else if (this == Inconclusive) onInconclusive();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
