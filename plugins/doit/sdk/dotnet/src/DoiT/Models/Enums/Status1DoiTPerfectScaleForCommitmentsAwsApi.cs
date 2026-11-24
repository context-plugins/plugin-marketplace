using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Current onboarding lifecycle stage for this product line.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DoiTPerfectScaleForCommitmentsAwsApi>))]
public sealed record Status1DoiTPerfectScaleForCommitmentsAwsApi : OpenStringEnum<Status1DoiTPerfectScaleForCommitmentsAwsApi>
{
    private Status1DoiTPerfectScaleForCommitmentsAwsApi(string value) : base(value)
    {
    }

    public static readonly Status1DoiTPerfectScaleForCommitmentsAwsApi NotStarted = new("not_started");

    public static readonly Status1DoiTPerfectScaleForCommitmentsAwsApi Onboarding = new("onboarding");

    public static readonly Status1DoiTPerfectScaleForCommitmentsAwsApi Done = new("done");

    public static readonly Status1DoiTPerfectScaleForCommitmentsAwsApi Error = new("error");

    public TResult Match<TResult>(Func<TResult> onNotStarted,
        Func<TResult> onOnboarding,
        Func<TResult> onDone,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotStarted => onNotStarted(),
            _ when this == Onboarding => onOnboarding(),
            _ when this == Done => onDone(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotStarted, Action onOnboarding, Action onDone, Action onError, Action<string> otherwise)
    {
        if (this == NotStarted) onNotStarted();
        else if (this == Onboarding) onOnboarding();
        else if (this == Done) onDone();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
