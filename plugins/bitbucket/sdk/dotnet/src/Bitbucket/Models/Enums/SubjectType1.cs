using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SubjectType1>))]
public sealed record SubjectType1 : OpenStringEnum<SubjectType1>
{
    private SubjectType1(string value) : base(value)
    {
    }

    public static readonly SubjectType1 Repository = new("repository");

    public static readonly SubjectType1 Workspace = new("workspace");

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
