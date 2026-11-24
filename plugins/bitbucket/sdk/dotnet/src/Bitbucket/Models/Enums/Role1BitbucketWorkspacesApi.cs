using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Role1BitbucketWorkspacesApi>))]
public sealed record Role1BitbucketWorkspacesApi : OpenStringEnum<Role1BitbucketWorkspacesApi>
{
    private Role1BitbucketWorkspacesApi(string value) : base(value)
    {
    }

    public static readonly Role1BitbucketWorkspacesApi Owner = new("owner");

    public static readonly Role1BitbucketWorkspacesApi Collaborator = new("collaborator");

    public static readonly Role1BitbucketWorkspacesApi Member = new("member");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onCollaborator,
        Func<TResult> onMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Collaborator => onCollaborator(),
            _ when this == Member => onMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onCollaborator, Action onMember, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Collaborator) onCollaborator();
        else if (this == Member) onMember();
        else otherwise(Value);
    }
}
