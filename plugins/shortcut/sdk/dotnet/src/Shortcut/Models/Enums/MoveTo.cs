using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MoveTo>))]
public sealed record MoveTo : OpenStringEnum<MoveTo>
{
    private MoveTo(string value) : base(value)
    {
    }

    public static readonly MoveTo Last = new("last");

    public static readonly MoveTo First = new("first");

    public TResult Match<TResult>(Func<TResult> onLast, Func<TResult> onFirst, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Last => onLast(),
            _ when this == First => onFirst(),
            _ => otherwise(Value)
        };

    public void Match(Action onLast, Action onFirst, Action<string> otherwise)
    {
        if (this == Last) onLast();
        else if (this == First) onFirst();
        else otherwise(Value);
    }
}
