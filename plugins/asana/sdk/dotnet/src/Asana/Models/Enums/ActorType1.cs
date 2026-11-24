using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActorType1>))]
public sealed record ActorType1 : OpenStringEnum<ActorType1>
{
    private ActorType1(string value) : base(value)
    {
    }

    public static readonly ActorType1 User = new("user");

    public static readonly ActorType1 Asana = new("asana");

    public static readonly ActorType1 AsanaSupport = new("asana_support");

    public static readonly ActorType1 Anonymous = new("anonymous");

    public static readonly ActorType1 ExternalAdministrator = new("external_administrator");

    public TResult Match<TResult>(Func<TResult> onUser,
        Func<TResult> onAsana,
        Func<TResult> onAsanaSupport,
        Func<TResult> onAnonymous,
        Func<TResult> onExternalAdministrator,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Asana => onAsana(),
            _ when this == AsanaSupport => onAsanaSupport(),
            _ when this == Anonymous => onAnonymous(),
            _ when this == ExternalAdministrator => onExternalAdministrator(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser,
        Action onAsana,
        Action onAsanaSupport,
        Action onAnonymous,
        Action onExternalAdministrator,
        Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Asana) onAsana();
        else if (this == AsanaSupport) onAsanaSupport();
        else if (this == Anonymous) onAnonymous();
        else if (this == ExternalAdministrator) onExternalAdministrator();
        else otherwise(Value);
    }
}
