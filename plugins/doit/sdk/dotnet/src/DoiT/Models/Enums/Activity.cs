using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Activity type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Activity>))]
public sealed record Activity : OpenStringEnum<Activity>
{
    private Activity(string value) : base(value)
    {
    }

    public static readonly Activity NodeCreate = new("NODE_CREATE");

    public static readonly Activity NodeUpdate = new("NODE_UPDATE");

    public static readonly Activity NodeDelete = new("NODE_DELETE");

    public static readonly Activity LinkCreate = new("LINK_CREATE");

    public static readonly Activity LinkUpdate = new("LINK_UPDATE");

    public static readonly Activity LinkDelete = new("LINK_DELETE");

    public static readonly Activity GroupCreate = new("GROUP_CREATE");

    public static readonly Activity GroupUpdate = new("GROUP_UPDATE");

    public static readonly Activity GroupDelete = new("GROUP_DELETE");

    public static readonly Activity AttachmentCreate = new("ATTACHMENT_CREATE");

    public static readonly Activity AttachmentUpdate = new("ATTACHMENT_UPDATE");

    public static readonly Activity AttachmentDelete = new("ATTACHMENT_DELETE");

    public TResult Match<TResult>(Func<TResult> onNodeCreate,
        Func<TResult> onNodeUpdate,
        Func<TResult> onNodeDelete,
        Func<TResult> onLinkCreate,
        Func<TResult> onLinkUpdate,
        Func<TResult> onLinkDelete,
        Func<TResult> onGroupCreate,
        Func<TResult> onGroupUpdate,
        Func<TResult> onGroupDelete,
        Func<TResult> onAttachmentCreate,
        Func<TResult> onAttachmentUpdate,
        Func<TResult> onAttachmentDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NodeCreate => onNodeCreate(),
            _ when this == NodeUpdate => onNodeUpdate(),
            _ when this == NodeDelete => onNodeDelete(),
            _ when this == LinkCreate => onLinkCreate(),
            _ when this == LinkUpdate => onLinkUpdate(),
            _ when this == LinkDelete => onLinkDelete(),
            _ when this == GroupCreate => onGroupCreate(),
            _ when this == GroupUpdate => onGroupUpdate(),
            _ when this == GroupDelete => onGroupDelete(),
            _ when this == AttachmentCreate => onAttachmentCreate(),
            _ when this == AttachmentUpdate => onAttachmentUpdate(),
            _ when this == AttachmentDelete => onAttachmentDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onNodeCreate,
        Action onNodeUpdate,
        Action onNodeDelete,
        Action onLinkCreate,
        Action onLinkUpdate,
        Action onLinkDelete,
        Action onGroupCreate,
        Action onGroupUpdate,
        Action onGroupDelete,
        Action onAttachmentCreate,
        Action onAttachmentUpdate,
        Action onAttachmentDelete,
        Action<string> otherwise)
    {
        if (this == NodeCreate) onNodeCreate();
        else if (this == NodeUpdate) onNodeUpdate();
        else if (this == NodeDelete) onNodeDelete();
        else if (this == LinkCreate) onLinkCreate();
        else if (this == LinkUpdate) onLinkUpdate();
        else if (this == LinkDelete) onLinkDelete();
        else if (this == GroupCreate) onGroupCreate();
        else if (this == GroupUpdate) onGroupUpdate();
        else if (this == GroupDelete) onGroupDelete();
        else if (this == AttachmentCreate) onAttachmentCreate();
        else if (this == AttachmentUpdate) onAttachmentUpdate();
        else if (this == AttachmentDelete) onAttachmentDelete();
        else otherwise(Value);
    }
}
