using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusJuriSignWebhooksApi>))]
public sealed record StatusJuriSignWebhooksApi : OpenStringEnum<StatusJuriSignWebhooksApi>
{
    private StatusJuriSignWebhooksApi(string value) : base(value)
    {
    }

    public static readonly StatusJuriSignWebhooksApi Success = new("success");

    public static readonly StatusJuriSignWebhooksApi Pending = new("pending");

    public static readonly StatusJuriSignWebhooksApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onPending, Action onFailed, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
