using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// The role of the message author.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RoleParallelAiResponsesApi>))]
public sealed record RoleParallelAiResponsesApi : OpenStringEnum<RoleParallelAiResponsesApi>
{
    private RoleParallelAiResponsesApi(string value) : base(value)
    {
    }

    public static readonly RoleParallelAiResponsesApi User = new("user");

    public static readonly RoleParallelAiResponsesApi Assistant = new("assistant");

    public static readonly RoleParallelAiResponsesApi System = new("system");

    public static readonly RoleParallelAiResponsesApi Developer = new("developer");

    public TResult Match<TResult>(Func<TResult> onUser,
        Func<TResult> onAssistant,
        Func<TResult> onSystem,
        Func<TResult> onDeveloper,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Assistant => onAssistant(),
            _ when this == System => onSystem(),
            _ when this == Developer => onDeveloper(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onAssistant, Action onSystem, Action onDeveloper, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Assistant) onAssistant();
        else if (this == System) onSystem();
        else if (this == Developer) onDeveloper();
        else otherwise(Value);
    }
}
