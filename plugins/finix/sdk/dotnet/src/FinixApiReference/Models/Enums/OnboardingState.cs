using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the state of the <c>Merchant's</c> onboarding.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OnboardingState>))]
public sealed record OnboardingState : OpenStringEnum<OnboardingState>
{
    private OnboardingState(string value) : base(value)
    {
    }

    public static readonly OnboardingState Approved = new("APPROVED");

    public static readonly OnboardingState Provisioning = new("PROVISIONING");

    public static readonly OnboardingState Rejected = new("REJECTED");

    public static readonly OnboardingState UpdateRequested = new("UPDATE_REQUESTED");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onProvisioning,
        Func<TResult> onRejected,
        Func<TResult> onUpdateRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == Provisioning => onProvisioning(),
            _ when this == Rejected => onRejected(),
            _ when this == UpdateRequested => onUpdateRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved,
        Action onProvisioning,
        Action onRejected,
        Action onUpdateRequested,
        Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == Provisioning) onProvisioning();
        else if (this == Rejected) onRejected();
        else if (this == UpdateRequested) onUpdateRequested();
        else otherwise(Value);
    }
}
