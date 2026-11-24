using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. Source of the cohort.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CohortSource>))]
public sealed record CohortSource : OpenStringEnum<CohortSource>
{
    private CohortSource(string value) : base(value)
    {
    }

    public static readonly CohortSource CohortSourceUnspecified = new("COHORT_SOURCE_UNSPECIFIED");

    public static readonly CohortSource UserProvided = new("USER_PROVIDED");

    public static readonly CohortSource Airflow = new("AIRFLOW");

    public TResult Match<TResult>(Func<TResult> onCohortSourceUnspecified,
        Func<TResult> onUserProvided,
        Func<TResult> onAirflow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CohortSourceUnspecified => onCohortSourceUnspecified(),
            _ when this == UserProvided => onUserProvided(),
            _ when this == Airflow => onAirflow(),
            _ => otherwise(Value)
        };

    public void Match(Action onCohortSourceUnspecified,
        Action onUserProvided,
        Action onAirflow,
        Action<string> otherwise)
    {
        if (this == CohortSourceUnspecified) onCohortSourceUnspecified();
        else if (this == UserProvided) onUserProvided();
        else if (this == Airflow) onAirflow();
        else otherwise(Value);
    }
}
