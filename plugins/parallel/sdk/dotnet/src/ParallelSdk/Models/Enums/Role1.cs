using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The role of the chat message.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role1>))]
public sealed record Role1 : OpenStringEnum<Role1>
{
    private Role1(string value) : base(value)
    {
    }

    public static readonly Role1 System = new("system");

    public static readonly Role1 User = new("user");

    public static readonly Role1 Assistant = new("assistant");

    public TResult Match<TResult>(Func<TResult> onSystem,
        Func<TResult> onUser,
        Func<TResult> onAssistant,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == System => onSystem(),
            _ when this == User => onUser(),
            _ when this == Assistant => onAssistant(),
            _ => otherwise(Value)
        };

    public void Match(Action onSystem, Action onUser, Action onAssistant, Action<string> otherwise)
    {
        if (this == System) onSystem();
        else if (this == User) onUser();
        else if (this == Assistant) onAssistant();
        else otherwise(Value);
    }
}
