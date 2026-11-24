using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// <c>pending</c> (waiting for the owner to approve OAuth), <c>active</c>, <c>reauth_required</c> (the platform rejected the stored token or key) or <c>disconnected</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Pending = new("pending");

    public static readonly Status Active = new("active");

    public static readonly Status ReauthRequired = new("reauth_required");

    public static readonly Status Disconnected = new("disconnected");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onReauthRequired,
        Func<TResult> onDisconnected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == ReauthRequired => onReauthRequired(),
            _ when this == Disconnected => onDisconnected(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onActive,
        Action onReauthRequired,
        Action onDisconnected,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == ReauthRequired) onReauthRequired();
        else if (this == Disconnected) onDisconnected();
        else otherwise(Value);
    }
}
