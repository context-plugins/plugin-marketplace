using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The state of the vulnerability.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State3>))]
public sealed record State3 : OpenStringEnum<State3>
{
    private State3(string value) : base(value)
    {
    }

    public static readonly State3 Open = new("OPEN");

    public static readonly State3 Remediated = new("REMEDIATED");

    public static readonly State3 Declined = new("DECLINED");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onRemediated,
        Func<TResult> onDeclined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Remediated => onRemediated(),
            _ when this == Declined => onDeclined(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onRemediated, Action onDeclined, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Remediated) onRemediated();
        else if (this == Declined) onDeclined();
        else otherwise(Value);
    }
}
