using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RoleDoiTConnectionsApi>))]
public sealed record RoleDoiTConnectionsApi : OpenStringEnum<RoleDoiTConnectionsApi>
{
    private RoleDoiTConnectionsApi(string value) : base(value)
    {
    }

    public static readonly RoleDoiTConnectionsApi Owner = new("owner");

    public static readonly RoleDoiTConnectionsApi Editor = new("editor");

    public static readonly RoleDoiTConnectionsApi User = new("user");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onEditor,
        Func<TResult> onUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Editor => onEditor(),
            _ when this == User => onUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onEditor, Action onUser, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Editor) onEditor();
        else if (this == User) onUser();
        else otherwise(Value);
    }
}
