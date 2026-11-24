using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What kind of actor.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActorType>))]
public sealed record ActorType : OpenStringEnum<ActorType>
{
    private ActorType(string value) : base(value)
    {
    }

    public static readonly ActorType User = new("user");

    public static readonly ActorType Agent = new("agent");

    public static readonly ActorType ApiKey = new("api_key");

    public static readonly ActorType Link = new("link");

    public static readonly ActorType Guest = new("guest");

    public static readonly ActorType System = new("system");

    public TResult Match<TResult>(Func<TResult> onUser,
        Func<TResult> onAgent,
        Func<TResult> onApiKey,
        Func<TResult> onLink,
        Func<TResult> onGuest,
        Func<TResult> onSystem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Agent => onAgent(),
            _ when this == ApiKey => onApiKey(),
            _ when this == Link => onLink(),
            _ when this == Guest => onGuest(),
            _ when this == System => onSystem(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser,
        Action onAgent,
        Action onApiKey,
        Action onLink,
        Action onGuest,
        Action onSystem,
        Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Agent) onAgent();
        else if (this == ApiKey) onApiKey();
        else if (this == Link) onLink();
        else if (this == Guest) onGuest();
        else if (this == System) onSystem();
        else otherwise(Value);
    }
}
