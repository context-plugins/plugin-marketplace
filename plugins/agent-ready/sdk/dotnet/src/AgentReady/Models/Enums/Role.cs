using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role User = new("user");

    public static readonly Role Assistant = new("assistant");

    public TResult Match<TResult>(Func<TResult> onUser, Func<TResult> onAssistant, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == User => onUser(),
            _ when this == Assistant => onAssistant(),
            _ => otherwise(Value)
        };

    public void Match(Action onUser, Action onAssistant, Action<string> otherwise)
    {
        if (this == User) onUser();
        else if (this == Assistant) onAssistant();
        else otherwise(Value);
    }
}
