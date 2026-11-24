using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

/// <summary>
/// Present on skipped platform results; explains why a requested platform was not called.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason NotEnabled = new("not_enabled");

    public static readonly Reason RequiresDates = new("requires_dates");

    public TResult Match<TResult>(Func<TResult> onNotEnabled,
        Func<TResult> onRequiresDates,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotEnabled => onNotEnabled(),
            _ when this == RequiresDates => onRequiresDates(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotEnabled, Action onRequiresDates, Action<string> otherwise)
    {
        if (this == NotEnabled) onNotEnabled();
        else if (this == RequiresDates) onRequiresDates();
        else otherwise(Value);
    }
}
