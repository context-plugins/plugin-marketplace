using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Evaluation reason
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason TargetingMatch = new("TARGETING_MATCH");

    public static readonly Reason Default = new("DEFAULT");

    public static readonly Reason Static = new("STATIC");

    public TResult Match<TResult>(Func<TResult> onTargetingMatch,
        Func<TResult> onDefault,
        Func<TResult> onStatic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TargetingMatch => onTargetingMatch(),
            _ when this == Default => onDefault(),
            _ when this == Static => onStatic(),
            _ => otherwise(Value)
        };

    public void Match(Action onTargetingMatch, Action onDefault, Action onStatic, Action<string> otherwise)
    {
        if (this == TargetingMatch) onTargetingMatch();
        else if (this == Default) onDefault();
        else if (this == Static) onStatic();
        else otherwise(Value);
    }
}
