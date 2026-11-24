using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Target tone. Only used with mapping="switch_tone".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ToneMapping>))]
public sealed record ToneMapping : OpenStringEnum<ToneMapping>
{
    private ToneMapping(string value) : base(value)
    {
    }

    public static readonly ToneMapping Straightforward = new("straightforward");

    public static readonly ToneMapping Confident = new("confident");

    public static readonly ToneMapping Friendly = new("friendly");

    public static readonly ToneMapping Empathetic = new("empathetic");

    public static readonly ToneMapping Professional = new("professional");

    public static readonly ToneMapping Casual = new("casual");

    public static readonly ToneMapping Diplomatic = new("diplomatic");

    public static readonly ToneMapping Persuasive = new("persuasive");

    public TResult Match<TResult>(Func<TResult> onStraightforward,
        Func<TResult> onConfident,
        Func<TResult> onFriendly,
        Func<TResult> onEmpathetic,
        Func<TResult> onProfessional,
        Func<TResult> onCasual,
        Func<TResult> onDiplomatic,
        Func<TResult> onPersuasive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Straightforward => onStraightforward(),
            _ when this == Confident => onConfident(),
            _ when this == Friendly => onFriendly(),
            _ when this == Empathetic => onEmpathetic(),
            _ when this == Professional => onProfessional(),
            _ when this == Casual => onCasual(),
            _ when this == Diplomatic => onDiplomatic(),
            _ when this == Persuasive => onPersuasive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStraightforward,
        Action onConfident,
        Action onFriendly,
        Action onEmpathetic,
        Action onProfessional,
        Action onCasual,
        Action onDiplomatic,
        Action onPersuasive,
        Action<string> otherwise)
    {
        if (this == Straightforward) onStraightforward();
        else if (this == Confident) onConfident();
        else if (this == Friendly) onFriendly();
        else if (this == Empathetic) onEmpathetic();
        else if (this == Professional) onProfessional();
        else if (this == Casual) onCasual();
        else if (this == Diplomatic) onDiplomatic();
        else if (this == Persuasive) onPersuasive();
        else otherwise(Value);
    }
}
