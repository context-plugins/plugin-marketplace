using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Virtual Card Status enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VirtualCardStatus>))]
public sealed record VirtualCardStatus : OpenStringEnum<VirtualCardStatus>
{
    private VirtualCardStatus(string value) : base(value)
    {
    }

    public static readonly VirtualCardStatus Undefined = new("UNDEFINED");

    public static readonly VirtualCardStatus Open = new("OPEN");

    public static readonly VirtualCardStatus Pending = new("PENDING");

    public static readonly VirtualCardStatus RequireMoreInfo = new("REQUIRE_MORE_INFO");

    public static readonly VirtualCardStatus PayForYourOpportunity = new("PAY_FOR_YOUR_OPPORTUNITY");

    public static readonly VirtualCardStatus PhoneNumberNeeded = new("PHONE_NUMBER_NEEDED");

    public static readonly VirtualCardStatus Enrolled = new("ENROLLED");

    public static readonly VirtualCardStatus Declined = new("DECLINED");

    public static readonly VirtualCardStatus Confirmed = new("CONFIRMED");

    public static readonly VirtualCardStatus Recruiting = new("RECRUITING");

    public static readonly VirtualCardStatus VerbalCommitment = new("VERBAL_COMMITMENT");

    public static readonly VirtualCardStatus PayerAssist = new("PAYER_ASSIST");

    public static readonly VirtualCardStatus OnHold = new("ON_HOLD");

    public static readonly VirtualCardStatus Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onUndefined,
        Func<TResult> onOpen,
        Func<TResult> onPending,
        Func<TResult> onRequireMoreInfo,
        Func<TResult> onPayForYourOpportunity,
        Func<TResult> onPhoneNumberNeeded,
        Func<TResult> onEnrolled,
        Func<TResult> onDeclined,
        Func<TResult> onConfirmed,
        Func<TResult> onRecruiting,
        Func<TResult> onVerbalCommitment,
        Func<TResult> onPayerAssist,
        Func<TResult> onOnHold,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Undefined => onUndefined(),
            _ when this == Open => onOpen(),
            _ when this == Pending => onPending(),
            _ when this == RequireMoreInfo => onRequireMoreInfo(),
            _ when this == PayForYourOpportunity => onPayForYourOpportunity(),
            _ when this == PhoneNumberNeeded => onPhoneNumberNeeded(),
            _ when this == Enrolled => onEnrolled(),
            _ when this == Declined => onDeclined(),
            _ when this == Confirmed => onConfirmed(),
            _ when this == Recruiting => onRecruiting(),
            _ when this == VerbalCommitment => onVerbalCommitment(),
            _ when this == PayerAssist => onPayerAssist(),
            _ when this == OnHold => onOnHold(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onUndefined,
        Action onOpen,
        Action onPending,
        Action onRequireMoreInfo,
        Action onPayForYourOpportunity,
        Action onPhoneNumberNeeded,
        Action onEnrolled,
        Action onDeclined,
        Action onConfirmed,
        Action onRecruiting,
        Action onVerbalCommitment,
        Action onPayerAssist,
        Action onOnHold,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Undefined) onUndefined();
        else if (this == Open) onOpen();
        else if (this == Pending) onPending();
        else if (this == RequireMoreInfo) onRequireMoreInfo();
        else if (this == PayForYourOpportunity) onPayForYourOpportunity();
        else if (this == PhoneNumberNeeded) onPhoneNumberNeeded();
        else if (this == Enrolled) onEnrolled();
        else if (this == Declined) onDeclined();
        else if (this == Confirmed) onConfirmed();
        else if (this == Recruiting) onRecruiting();
        else if (this == VerbalCommitment) onVerbalCommitment();
        else if (this == PayerAssist) onPayerAssist();
        else if (this == OnHold) onOnHold();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
