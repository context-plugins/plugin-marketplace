using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusLushaWebhooksApi>))]
public sealed record StatusLushaWebhooksApi : OpenStringEnum<StatusLushaWebhooksApi>
{
    private StatusLushaWebhooksApi(string value) : base(value)
    {
    }

    public static readonly StatusLushaWebhooksApi Success = new("success");

    public static readonly StatusLushaWebhooksApi Failed = new("failed");

    public static readonly StatusLushaWebhooksApi PermanentFailure = new("permanent_failure");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onFailed,
        Func<TResult> onPermanentFailure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failed => onFailed(),
            _ when this == PermanentFailure => onPermanentFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailed, Action onPermanentFailure, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failed) onFailed();
        else if (this == PermanentFailure) onPermanentFailure();
        else otherwise(Value);
    }
}
