using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// The type of actor that made this change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActorType>))]
public sealed record ActorType : OpenStringEnum<ActorType>
{
    private ActorType(string value) : base(value)
    {
    }

    public static readonly ActorType ActorTypeUnspecified = new("ACTOR_TYPE_UNSPECIFIED");

    public static readonly ActorType User = new("USER");

    public static readonly ActorType System = new("SYSTEM");

    public static readonly ActorType Support = new("SUPPORT");

    public TResult Match<TResult>(Func<TResult> onActorTypeUnspecified,
        Func<TResult> onUser,
        Func<TResult> onSystem,
        Func<TResult> onSupport,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ActorTypeUnspecified => onActorTypeUnspecified(),
            _ when this == User => onUser(),
            _ when this == System => onSystem(),
            _ when this == Support => onSupport(),
            _ => otherwise(Value)
        };

    public void Match(Action onActorTypeUnspecified,
        Action onUser,
        Action onSystem,
        Action onSupport,
        Action<string> otherwise)
    {
        if (this == ActorTypeUnspecified) onActorTypeUnspecified();
        else if (this == User) onUser();
        else if (this == System) onSystem();
        else if (this == Support) onSupport();
        else otherwise(Value);
    }
}
