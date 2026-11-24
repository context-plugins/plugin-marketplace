using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusJuriSignPublicFormsApi>))]
public sealed record StatusJuriSignPublicFormsApi : OpenStringEnum<StatusJuriSignPublicFormsApi>
{
    private StatusJuriSignPublicFormsApi(string value) : base(value)
    {
    }

    public static readonly StatusJuriSignPublicFormsApi Active = new("active");

    public static readonly StatusJuriSignPublicFormsApi Paused = new("paused");

    public static readonly StatusJuriSignPublicFormsApi Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onPaused,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action onExpired, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
