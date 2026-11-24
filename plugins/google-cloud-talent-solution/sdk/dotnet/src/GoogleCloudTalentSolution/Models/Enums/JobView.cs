using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// The desired job attributes returned for jobs in the search response. Defaults to JobView.JOB_VIEW_SMALL if no value is specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<JobView>))]
public sealed record JobView : OpenStringEnum<JobView>
{
    private JobView(string value) : base(value)
    {
    }

    public static readonly JobView JobViewUnspecified = new("JOB_VIEW_UNSPECIFIED");

    public static readonly JobView JobViewIdOnly = new("JOB_VIEW_ID_ONLY");

    public static readonly JobView JobViewMinimal = new("JOB_VIEW_MINIMAL");

    public static readonly JobView JobViewSmall = new("JOB_VIEW_SMALL");

    public static readonly JobView JobViewFull = new("JOB_VIEW_FULL");

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
