using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of entity. Set to either <c>repository</c> or <c>workspace</c> based on where the subscription is defined.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubjectType>))]
public sealed record SubjectType : OpenStringEnum<SubjectType>
{
    private SubjectType(string value) : base(value)
    {
    }

    public static readonly SubjectType Repository = new("repository");

    public static readonly SubjectType Workspace = new("workspace");

    public TResult Match<TResult>(Func<TResult> onRepository,
        Func<TResult> onWorkspace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Repository => onRepository(),
            _ when this == Workspace => onWorkspace(),
            _ => otherwise(Value)
        };

    public void Match(Action onRepository, Action onWorkspace, Action<string> otherwise)
    {
        if (this == Repository) onRepository();
        else if (this == Workspace) onWorkspace();
        else otherwise(Value);
    }
}
