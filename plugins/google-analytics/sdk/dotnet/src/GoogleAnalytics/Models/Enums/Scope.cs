using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. Immutable. The scope of this custom metric.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope MetricScopeUnspecified = new("METRIC_SCOPE_UNSPECIFIED");

    public static readonly Scope Event = new("EVENT");

    public TResult Match<TResult>(Func<TResult> onMetricScopeUnspecified,
        Func<TResult> onEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MetricScopeUnspecified => onMetricScopeUnspecified(),
            _ when this == Event => onEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onMetricScopeUnspecified, Action onEvent, Action<string> otherwise)
    {
        if (this == MetricScopeUnspecified) onMetricScopeUnspecified();
        else if (this == Event) onEvent();
        else otherwise(Value);
    }
}
