using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ByokScope>))]
public sealed record ByokScope : OpenStringEnum<ByokScope>
{
    private ByokScope(string value) : base(value)
    {
    }

    public static readonly ByokScope Member = new("member");

    public static readonly ByokScope Team = new("team");

    public TResult Match<TResult>(Func<TResult> onMember, Func<TResult> onTeam, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Member => onMember(),
            _ when this == Team => onTeam(),
            _ => otherwise(Value)
        };

    public void Match(Action onMember, Action onTeam, Action<string> otherwise)
    {
        if (this == Member) onMember();
        else if (this == Team) onTeam();
        else otherwise(Value);
    }
}
