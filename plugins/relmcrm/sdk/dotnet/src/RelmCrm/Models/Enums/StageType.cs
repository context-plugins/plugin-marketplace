using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

/// <summary>
/// Semantic stage type - use this for won/lost, cross-pipeline, instead of string-matching the key.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StageType>))]
public sealed record StageType : OpenStringEnum<StageType>
{
    private StageType(string value) : base(value)
    {
    }

    public static readonly StageType Open = new("open");

    public static readonly StageType Won = new("won");

    public static readonly StageType Lost = new("lost");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onWon,
        Func<TResult> onLost,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Won => onWon(),
            _ when this == Lost => onLost(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onWon, Action onLost, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Won) onWon();
        else if (this == Lost) onLost();
        else otherwise(Value);
    }
}
