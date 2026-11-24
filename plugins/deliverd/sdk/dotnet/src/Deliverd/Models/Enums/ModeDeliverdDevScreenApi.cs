using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModeDeliverdDevScreenApi>))]
public sealed record ModeDeliverdDevScreenApi : OpenStringEnum<ModeDeliverdDevScreenApi>
{
    private ModeDeliverdDevScreenApi(string value) : base(value)
    {
    }

    public static readonly ModeDeliverdDevScreenApi Enforce = new("enforce");

    public static readonly ModeDeliverdDevScreenApi ReportOnly = new("report_only");

    public TResult Match<TResult>(Func<TResult> onEnforce,
        Func<TResult> onReportOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enforce => onEnforce(),
            _ when this == ReportOnly => onReportOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnforce, Action onReportOnly, Action<string> otherwise)
    {
        if (this == Enforce) onEnforce();
        else if (this == ReportOnly) onReportOnly();
        else otherwise(Value);
    }
}
