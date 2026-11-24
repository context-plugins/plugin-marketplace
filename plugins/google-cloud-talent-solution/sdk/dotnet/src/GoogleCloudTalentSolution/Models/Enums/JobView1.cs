using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobView1>))]
public sealed record JobView1 : OpenStringEnum<JobView1>
{
    private JobView1(string value) : base(value)
    {
    }

    public static readonly JobView1 JobViewUnspecified = new("JOB_VIEW_UNSPECIFIED");

    public static readonly JobView1 JobViewIdOnly = new("JOB_VIEW_ID_ONLY");

    public static readonly JobView1 JobViewMinimal = new("JOB_VIEW_MINIMAL");

    public static readonly JobView1 JobViewSmall = new("JOB_VIEW_SMALL");

    public static readonly JobView1 JobViewFull = new("JOB_VIEW_FULL");

    public TResult Match<TResult>(Func<TResult> onJobViewUnspecified,
        Func<TResult> onJobViewIdOnly,
        Func<TResult> onJobViewMinimal,
        Func<TResult> onJobViewSmall,
        Func<TResult> onJobViewFull,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobViewUnspecified => onJobViewUnspecified(),
            _ when this == JobViewIdOnly => onJobViewIdOnly(),
            _ when this == JobViewMinimal => onJobViewMinimal(),
            _ when this == JobViewSmall => onJobViewSmall(),
            _ when this == JobViewFull => onJobViewFull(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobViewUnspecified,
        Action onJobViewIdOnly,
        Action onJobViewMinimal,
        Action onJobViewSmall,
        Action onJobViewFull,
        Action<string> otherwise)
    {
        if (this == JobViewUnspecified) onJobViewUnspecified();
        else if (this == JobViewIdOnly) onJobViewIdOnly();
        else if (this == JobViewMinimal) onJobViewMinimal();
        else if (this == JobViewSmall) onJobViewSmall();
        else if (this == JobViewFull) onJobViewFull();
        else otherwise(Value);
    }
}
