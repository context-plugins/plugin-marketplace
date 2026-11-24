using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Developer = new("developer");

    public static readonly Role System = new("system");

    public static readonly Role User = new("user");

    public static readonly Role Assistant = new("assistant");

    public static readonly Role Tool = new("tool");

    public TResult Match<TResult>(Func<TResult> onDeveloper,
        Func<TResult> onSystem,
        Func<TResult> onUser,
        Func<TResult> onAssistant,
        Func<TResult> onTool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Developer => onDeveloper(),
            _ when this == System => onSystem(),
            _ when this == User => onUser(),
            _ when this == Assistant => onAssistant(),
            _ when this == Tool => onTool(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeveloper,
        Action onSystem,
        Action onUser,
        Action onAssistant,
        Action onTool,
        Action<string> otherwise)
    {
        if (this == Developer) onDeveloper();
        else if (this == System) onSystem();
        else if (this == User) onUser();
        else if (this == Assistant) onAssistant();
        else if (this == Tool) onTool();
        else otherwise(Value);
    }
}
