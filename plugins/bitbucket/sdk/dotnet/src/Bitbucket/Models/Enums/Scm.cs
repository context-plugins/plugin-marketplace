using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scm>))]
public sealed record Scm : OpenStringEnum<Scm>
{
    private Scm(string value) : base(value)
    {
    }

    public static readonly Scm Git = new("git");

    public TResult Match<TResult>(Func<TResult> onGit, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Git => onGit(),
            _ => otherwise(Value)
        };

    public void Match(Action onGit, Action<string> otherwise)
    {
        if (this == Git) onGit();
        else otherwise(Value);
    }
}
