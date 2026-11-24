using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDoiTSignupApi>))]
public sealed record StatusDoiTSignupApi : OpenStringEnum<StatusDoiTSignupApi>
{
    private StatusDoiTSignupApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTSignupApi PendingConsent = new("pending_consent");

    public static readonly StatusDoiTSignupApi Consented = new("consented");

    public static readonly StatusDoiTSignupApi Provisioning = new("provisioning");

    public static readonly StatusDoiTSignupApi Completed = new("completed");

    public static readonly StatusDoiTSignupApi Rejected = new("rejected");

    public static readonly StatusDoiTSignupApi Expired = new("expired");

    public static readonly StatusDoiTSignupApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPendingConsent,
        Func<TResult> onConsented,
        Func<TResult> onProvisioning,
        Func<TResult> onCompleted,
        Func<TResult> onRejected,
        Func<TResult> onExpired,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PendingConsent => onPendingConsent(),
            _ when this == Consented => onConsented(),
            _ when this == Provisioning => onProvisioning(),
            _ when this == Completed => onCompleted(),
            _ when this == Rejected => onRejected(),
            _ when this == Expired => onExpired(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPendingConsent,
        Action onConsented,
        Action onProvisioning,
        Action onCompleted,
        Action onRejected,
        Action onExpired,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == PendingConsent) onPendingConsent();
        else if (this == Consented) onConsented();
        else if (this == Provisioning) onProvisioning();
        else if (this == Completed) onCompleted();
        else if (this == Rejected) onRejected();
        else if (this == Expired) onExpired();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
