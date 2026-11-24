using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Integration status. Reconnect for inactive; grant private-channel scopes for missing_private_scope. None means no usable workspace was found; a shared channel may still be available.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WorkspaceStatus>))]
public sealed record WorkspaceStatus : OpenStringEnum<WorkspaceStatus>
{
    private WorkspaceStatus(string value) : base(value)
    {
    }

    public static readonly WorkspaceStatus None = new("none");

    public static readonly WorkspaceStatus Ok = new("ok");

    public static readonly WorkspaceStatus Inactive = new("inactive");

    public static readonly WorkspaceStatus MissingPrivateScope = new("missing_private_scope");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onOk,
        Func<TResult> onInactive,
        Func<TResult> onMissingPrivateScope,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Ok => onOk(),
            _ when this == Inactive => onInactive(),
            _ when this == MissingPrivateScope => onMissingPrivateScope(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onOk,
        Action onInactive,
        Action onMissingPrivateScope,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Ok) onOk();
        else if (this == Inactive) onInactive();
        else if (this == MissingPrivateScope) onMissingPrivateScope();
        else otherwise(Value);
    }
}
