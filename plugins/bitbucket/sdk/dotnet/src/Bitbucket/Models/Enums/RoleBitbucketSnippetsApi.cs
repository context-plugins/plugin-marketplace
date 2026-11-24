using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RoleBitbucketSnippetsApi>))]
public sealed record RoleBitbucketSnippetsApi : OpenStringEnum<RoleBitbucketSnippetsApi>
{
    private RoleBitbucketSnippetsApi(string value) : base(value)
    {
    }

    public static readonly RoleBitbucketSnippetsApi Owner = new("owner");

    public static readonly RoleBitbucketSnippetsApi Contributor = new("contributor");

    public static readonly RoleBitbucketSnippetsApi Member = new("member");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onContributor,
        Func<TResult> onMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Contributor => onContributor(),
            _ when this == Member => onMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onContributor, Action onMember, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Contributor) onContributor();
        else if (this == Member) onMember();
        else otherwise(Value);
    }
}
