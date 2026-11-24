using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2DoiTPerfectScaleForCommitmentsGcpApi>))]
public sealed record Status2DoiTPerfectScaleForCommitmentsGcpApi : OpenStringEnum<Status2DoiTPerfectScaleForCommitmentsGcpApi>
{
    private Status2DoiTPerfectScaleForCommitmentsGcpApi(string value) : base(value)
    {
    }

    public static readonly Status2DoiTPerfectScaleForCommitmentsGcpApi Active = new("active");

    public static readonly Status2DoiTPerfectScaleForCommitmentsGcpApi Expired = new("expired");

    public static readonly Status2DoiTPerfectScaleForCommitmentsGcpApi Creating = new("creating");

    public static readonly Status2DoiTPerfectScaleForCommitmentsGcpApi Pending = new("pending");

    public static readonly Status2DoiTPerfectScaleForCommitmentsGcpApi Cancelled = new("cancelled");

    public static readonly Status2DoiTPerfectScaleForCommitmentsGcpApi NotYetActive = new("not_yet_active");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onExpired,
        Func<TResult> onCreating,
        Func<TResult> onPending,
        Func<TResult> onCancelled,
        Func<TResult> onNotYetActive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Expired => onExpired(),
            _ when this == Creating => onCreating(),
            _ when this == Pending => onPending(),
            _ when this == Cancelled => onCancelled(),
            _ when this == NotYetActive => onNotYetActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive,
        Action onExpired,
        Action onCreating,
        Action onPending,
        Action onCancelled,
        Action onNotYetActive,
        Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Expired) onExpired();
        else if (this == Creating) onCreating();
        else if (this == Pending) onPending();
        else if (this == Cancelled) onCancelled();
        else if (this == NotYetActive) onNotYetActive();
        else otherwise(Value);
    }
}
