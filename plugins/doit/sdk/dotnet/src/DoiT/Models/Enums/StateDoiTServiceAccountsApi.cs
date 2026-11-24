using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The token's stored state: <c>active</c> while it is enabled, <c>disabled</c> once it has been turned off. This is not a liveness signal — a token whose <c>expiresTime</c> has passed stops authenticating but keeps the state it was stored with, so <c>active</c> here does not by itself mean the token still works; compare <c>expiresTime</c>. Only these two values can be set.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateDoiTServiceAccountsApi>))]
public sealed record StateDoiTServiceAccountsApi : OpenStringEnum<StateDoiTServiceAccountsApi>
{
    private StateDoiTServiceAccountsApi(string value) : base(value)
    {
    }

    public static readonly StateDoiTServiceAccountsApi Active = new("active");

    public static readonly StateDoiTServiceAccountsApi Disabled = new("disabled");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDisabled, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
