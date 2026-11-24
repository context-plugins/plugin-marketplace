using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusJuriSignSignRequestsApi>))]
public sealed record StatusJuriSignSignRequestsApi : OpenStringEnum<StatusJuriSignSignRequestsApi>
{
    private StatusJuriSignSignRequestsApi(string value) : base(value)
    {
    }

    public static readonly StatusJuriSignSignRequestsApi Draft = new("draft");

    public static readonly StatusJuriSignSignRequestsApi Pending = new("pending");

    public static readonly StatusJuriSignSignRequestsApi Completed = new("completed");

    public static readonly StatusJuriSignSignRequestsApi Cancelled = new("cancelled");

    public static readonly StatusJuriSignSignRequestsApi Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onPending,
        Func<TResult> onCompleted,
        Func<TResult> onCancelled,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Pending => onPending(),
            _ when this == Completed => onCompleted(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onPending,
        Action onCompleted,
        Action onCancelled,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Pending) onPending();
        else if (this == Completed) onCompleted();
        else if (this == Cancelled) onCancelled();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
