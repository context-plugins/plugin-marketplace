using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// <c>active</c> to enable the token, <c>disabled</c> to stop it authenticating. Any other value, <c>deleted</c> and <c>expired</c> included, returns <c>400</c>. Re-enabling a token whose expiry has passed returns <c>422</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1DoiTServiceAccountsApi>))]
public sealed record State1DoiTServiceAccountsApi : OpenStringEnum<State1DoiTServiceAccountsApi>
{
    private State1DoiTServiceAccountsApi(string value) : base(value)
    {
    }

    public static readonly State1DoiTServiceAccountsApi Active = new("active");

    public static readonly State1DoiTServiceAccountsApi Disabled = new("disabled");

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
