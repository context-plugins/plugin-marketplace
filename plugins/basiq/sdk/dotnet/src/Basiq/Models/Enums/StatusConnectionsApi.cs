using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Connection status, available only for SERVER_SCOPE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusConnectionsApi>))]
public sealed record StatusConnectionsApi : OpenStringEnum<StatusConnectionsApi>
{
    private StatusConnectionsApi(string value) : base(value)
    {
    }

    public static readonly StatusConnectionsApi Active = new("active");

    public static readonly StatusConnectionsApi Pending = new("pending");

    public static readonly StatusConnectionsApi Invalid = new("invalid");

    public static readonly StatusConnectionsApi PreInit = new("pre-init");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onPending,
        Func<TResult> onInvalid,
        Func<TResult> onPreInit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Pending => onPending(),
            _ when this == Invalid => onInvalid(),
            _ when this == PreInit => onPreInit(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPending, Action onInvalid, Action onPreInit, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Pending) onPending();
        else if (this == Invalid) onInvalid();
        else if (this == PreInit) onPreInit();
        else otherwise(Value);
    }
}
