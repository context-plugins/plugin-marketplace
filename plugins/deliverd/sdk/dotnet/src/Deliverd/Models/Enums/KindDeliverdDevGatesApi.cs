using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevGatesApi>))]
public sealed record KindDeliverdDevGatesApi : OpenStringEnum<KindDeliverdDevGatesApi>
{
    private KindDeliverdDevGatesApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevGatesApi ReportVersion = new("report_version");

    public static readonly KindDeliverdDevGatesApi External = new("external");

    public TResult Match<TResult>(Func<TResult> onReportVersion,
        Func<TResult> onExternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReportVersion => onReportVersion(),
            _ when this == External => onExternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onReportVersion, Action onExternal, Action<string> otherwise)
    {
        if (this == ReportVersion) onReportVersion();
        else if (this == External) onExternal();
        else otherwise(Value);
    }
}
