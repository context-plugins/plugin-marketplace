using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The role assigned to the user, defining their level of access to the resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RoleDoiTSharingApi>))]
public sealed record RoleDoiTSharingApi : OpenStringEnum<RoleDoiTSharingApi>
{
    private RoleDoiTSharingApi(string value) : base(value)
    {
    }

    public static readonly RoleDoiTSharingApi Owner = new("owner");

    public static readonly RoleDoiTSharingApi Editor = new("editor");

    public static readonly RoleDoiTSharingApi Viewer = new("viewer");

    public TResult Match<TResult>(Func<TResult> onOwner,
        Func<TResult> onEditor,
        Func<TResult> onViewer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Owner => onOwner(),
            _ when this == Editor => onEditor(),
            _ when this == Viewer => onViewer(),
            _ => otherwise(Value)
        };

    public void Match(Action onOwner, Action onEditor, Action onViewer, Action<string> otherwise)
    {
        if (this == Owner) onOwner();
        else if (this == Editor) onEditor();
        else if (this == Viewer) onViewer();
        else otherwise(Value);
    }
}
