using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScopeType>))]
public sealed record ScopeType : OpenStringEnum<ScopeType>
{
    private ScopeType(string value) : base(value)
    {
    }

    public static readonly ScopeType Project = new("project");

    public TResult Match<TResult>(Func<TResult> onProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Project => onProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onProject, Action<string> otherwise)
    {
        if (this == Project) onProject();
        else otherwise(Value);
    }
}
