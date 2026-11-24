using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

/// <summary>
/// Semantic type; default open.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeRelmCrmPipelinesApi>))]
public sealed record TypeRelmCrmPipelinesApi : OpenStringEnum<TypeRelmCrmPipelinesApi>
{
    private TypeRelmCrmPipelinesApi(string value) : base(value)
    {
    }

    public static readonly TypeRelmCrmPipelinesApi Open = new("open");

    public static readonly TypeRelmCrmPipelinesApi Won = new("won");

    public static readonly TypeRelmCrmPipelinesApi Lost = new("lost");

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
