using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Optional. The logic operator between filters of the same group.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GroupType>))]
public sealed record GroupType : OpenStringEnum<GroupType>
{
    private GroupType(string value) : base(value)
    {
    }

    public static readonly GroupType And = new("AND");

    public TResult Match<TResult>(Func<TResult> onAnd, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == And => onAnd(),
            _ => otherwise(Value)
        };

    public void Match(Action onAnd, Action<string> otherwise)
    {
        if (this == And) onAnd();
        else otherwise(Value);
    }
}
