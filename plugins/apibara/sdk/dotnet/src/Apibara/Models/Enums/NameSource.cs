using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NameSource>))]
public sealed record NameSource : OpenStringEnum<NameSource>
{
    private NameSource(string value) : base(value)
    {
    }

    public static readonly NameSource CopartScn = new("copart_scn");

    public static readonly NameSource CopartSn = new("copart_sn");

    public static readonly NameSource IaaiProviderName = new("iaai_provider_name");

    public static readonly NameSource Unavailable = new("unavailable");

    public TResult Match<TResult>(Func<TResult> onCopartScn,
        Func<TResult> onCopartSn,
        Func<TResult> onIaaiProviderName,
        Func<TResult> onUnavailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CopartScn => onCopartScn(),
            _ when this == CopartSn => onCopartSn(),
            _ when this == IaaiProviderName => onIaaiProviderName(),
            _ when this == Unavailable => onUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onCopartScn,
        Action onCopartSn,
        Action onIaaiProviderName,
        Action onUnavailable,
        Action<string> otherwise)
    {
        if (this == CopartScn) onCopartScn();
        else if (this == CopartSn) onCopartSn();
        else if (this == IaaiProviderName) onIaaiProviderName();
        else if (this == Unavailable) onUnavailable();
        else otherwise(Value);
    }
}
