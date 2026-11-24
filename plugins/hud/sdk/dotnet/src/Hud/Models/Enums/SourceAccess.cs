using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourceAccess>))]
public sealed record SourceAccess : OpenStringEnum<SourceAccess>
{
    private SourceAccess(string value) : base(value)
    {
    }

    public static readonly SourceAccess Team = new("team");

    public static readonly SourceAccess Published = new("published");

    public TResult Match<TResult>(Func<TResult> onTeam, Func<TResult> onPublished, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Team => onTeam(),
            _ when this == Published => onPublished(),
            _ => otherwise(Value)
        };

    public void Match(Action onTeam, Action onPublished, Action<string> otherwise)
    {
        if (this == Team) onTeam();
        else if (this == Published) onPublished();
        else otherwise(Value);
    }
}
