using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason ModelTimeout = new("model_timeout");

    public static readonly Reason ModelUnavailable = new("model_unavailable");

    public static readonly Reason ModelError = new("model_error");

    public TResult Match<TResult>(Func<TResult> onModelTimeout,
        Func<TResult> onModelUnavailable,
        Func<TResult> onModelError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ModelTimeout => onModelTimeout(),
            _ when this == ModelUnavailable => onModelUnavailable(),
            _ when this == ModelError => onModelError(),
            _ => otherwise(Value)
        };

    public void Match(Action onModelTimeout, Action onModelUnavailable, Action onModelError, Action<string> otherwise)
    {
        if (this == ModelTimeout) onModelTimeout();
        else if (this == ModelUnavailable) onModelUnavailable();
        else if (this == ModelError) onModelError();
        else otherwise(Value);
    }
}
