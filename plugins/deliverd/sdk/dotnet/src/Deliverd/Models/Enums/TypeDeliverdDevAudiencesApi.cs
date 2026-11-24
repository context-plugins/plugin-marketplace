using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeDeliverdDevAudiencesApi>))]
public sealed record TypeDeliverdDevAudiencesApi : OpenStringEnum<TypeDeliverdDevAudiencesApi>
{
    private TypeDeliverdDevAudiencesApi(string value) : base(value)
    {
    }

    public static readonly TypeDeliverdDevAudiencesApi Owner = new("owner");

    public static readonly TypeDeliverdDevAudiencesApi User = new("user");

    public static readonly TypeDeliverdDevAudiencesApi Workspace = new("workspace");

    public static readonly TypeDeliverdDevAudiencesApi Group = new("group");

    public static readonly TypeDeliverdDevAudiencesApi Org = new("org");

    public static readonly TypeDeliverdDevAudiencesApi Guest = new("guest");

    public static readonly TypeDeliverdDevAudiencesApi Link = new("link");

    public static readonly TypeDeliverdDevAudiencesApi Public = new("public");

    public static readonly TypeDeliverdDevAudiencesApi Domain = new("domain");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onUser,
        Func<TResult> onWorkspace,
        Func<TResult> onGroup,
        Func<TResult> onOrg,
        Func<TResult> onGuest,
        Func<TResult> onLink,
        Func<TResult> onPublic,
        Func<TResult> onDomain,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == User => onUser(),
            _ when this == Workspace => onWorkspace(),
            _ when this == Group => onGroup(),
            _ when this == Org => onOrg(),
            _ when this == Guest => onGuest(),
            _ when this == Link => onLink(),
            _ when this == Public => onPublic(),
            _ when this == Domain => onDomain(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner,
        Action onUser,
        Action onWorkspace,
        Action onGroup,
        Action onOrg,
        Action onGuest,
        Action onLink,
        Action onPublic,
        Action onDomain,
        Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == User) onUser();
        else if (this == Workspace) onWorkspace();
        else if (this == Group) onGroup();
        else if (this == Org) onOrg();
        else if (this == Guest) onGuest();
        else if (this == Link) onLink();
        else if (this == Public) onPublic();
        else if (this == Domain) onDomain();
        else otherwise(Value);
    }
}
