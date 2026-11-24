using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The user state, one of partial, full, disabled, or imported.  A partial user is disabled, has no means to log in, and is not an import user.  A full user is enabled and has a means to log in.  A disabled user is disabled and has a means to log in.  An import user is disabled, has no means to log in, and is marked as an import user.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateShortcutMembersApi>))]
public sealed record StateShortcutMembersApi : OpenStringEnum<StateShortcutMembersApi>
{
    private StateShortcutMembersApi(string value) : base(value)
    {
    }

    public static readonly StateShortcutMembersApi Partial = new("partial");

    public static readonly StateShortcutMembersApi Full = new("full");

    public static readonly StateShortcutMembersApi Disabled = new("disabled");

    public static readonly StateShortcutMembersApi Imported = new("imported");

    public TResult Match<TResult>(Func<TResult> onPartial,
        Func<TResult> onFull,
        Func<TResult> onDisabled,
        Func<TResult> onImported,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Partial => onPartial(),
            _ when this == Full => onFull(),
            _ when this == Disabled => onDisabled(),
            _ when this == Imported => onImported(),
            _ => otherwise(Value)
        };

    public void Match(Action onPartial, Action onFull, Action onDisabled, Action onImported, Action<string> otherwise)
    {
        if (this == Partial) onPartial();
        else if (this == Full) onFull();
        else if (this == Disabled) onDisabled();
        else if (this == Imported) onImported();
        else otherwise(Value);
    }
}
