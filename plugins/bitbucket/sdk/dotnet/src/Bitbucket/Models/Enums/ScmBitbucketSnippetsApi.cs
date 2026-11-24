using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The DVCS used to store the snippet.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScmBitbucketSnippetsApi>))]
public sealed record ScmBitbucketSnippetsApi : OpenStringEnum<ScmBitbucketSnippetsApi>
{
    private ScmBitbucketSnippetsApi(string value) : base(value)
    {
    }

    public static readonly ScmBitbucketSnippetsApi Git = new("git");

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
