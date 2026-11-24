using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

/// <summary>
/// The permission level the authenticated user has on this base.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PermissionLevel>))]
public sealed record PermissionLevel : OpenStringEnum<PermissionLevel>
{
    private PermissionLevel(string value) : base(value)
    {
    }

    public static readonly PermissionLevel None = new("none");

    public static readonly PermissionLevel Read = new("read");

    public static readonly PermissionLevel Comment = new("comment");

    public static readonly PermissionLevel Edit = new("edit");

    public static readonly PermissionLevel Create = new("create");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onRead,
        Func<TResult> onComment,
        Func<TResult> onEdit,
        Func<TResult> onCreate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Read => onRead(),
            _ when this == Comment => onComment(),
            _ when this == Edit => onEdit(),
            _ when this == Create => onCreate(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onRead,
        Action onComment,
        Action onEdit,
        Action onCreate,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Read) onRead();
        else if (this == Comment) onComment();
        else if (this == Edit) onEdit();
        else if (this == Create) onCreate();
        else otherwise(Value);
    }
}
