using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortByDoiTAnomaliesApi>))]
public sealed record SortByDoiTAnomaliesApi : OpenStringEnum<SortByDoiTAnomaliesApi>
{
    private SortByDoiTAnomaliesApi(string value) : base(value)
    {
    }

    public static readonly SortByDoiTAnomaliesApi StartTime = new("startTime");

    public static readonly SortByDoiTAnomaliesApi SeverityLevel = new("severityLevel");

    public static readonly SortByDoiTAnomaliesApi CostOfAnomaly = new("costOfAnomaly");

    public TResult Match<TResult>(Func<TResult> onStartTime,
        Func<TResult> onSeverityLevel,
        Func<TResult> onCostOfAnomaly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StartTime => onStartTime(),
            _ when this == SeverityLevel => onSeverityLevel(),
            _ when this == CostOfAnomaly => onCostOfAnomaly(),
            _ => otherwise(Value)
        };

    public void Match(Action onStartTime, Action onSeverityLevel, Action onCostOfAnomaly, Action<string> otherwise)
    {
        if (this == StartTime) onStartTime();
        else if (this == SeverityLevel) onSeverityLevel();
        else if (this == CostOfAnomaly) onCostOfAnomaly();
        else otherwise(Value);
    }
}
