using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The integration type of the file (e.g. google, dropbox, box).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeShortcutLinkedFilesApi>))]
public sealed record TypeShortcutLinkedFilesApi : OpenStringEnum<TypeShortcutLinkedFilesApi>
{
    private TypeShortcutLinkedFilesApi(string value) : base(value)
    {
    }

    public static readonly TypeShortcutLinkedFilesApi Google = new("google");

    public static readonly TypeShortcutLinkedFilesApi Url = new("url");

    public static readonly TypeShortcutLinkedFilesApi Dropbox = new("dropbox");

    public static readonly TypeShortcutLinkedFilesApi Box = new("box");

    public static readonly TypeShortcutLinkedFilesApi Onedrive = new("onedrive");

    public TResult Match<TResult>(Func<TResult> onGoogle,
        Func<TResult> onUrl,
        Func<TResult> onDropbox,
        Func<TResult> onBox,
        Func<TResult> onOnedrive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Google => onGoogle(),
            _ when this == Url => onUrl(),
            _ when this == Dropbox => onDropbox(),
            _ when this == Box => onBox(),
            _ when this == Onedrive => onOnedrive(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogle,
        Action onUrl,
        Action onDropbox,
        Action onBox,
        Action onOnedrive,
        Action<string> otherwise)
    {
        if (this == Google) onGoogle();
        else if (this == Url) onUrl();
        else if (this == Dropbox) onDropbox();
        else if (this == Box) onBox();
        else if (this == Onedrive) onOnedrive();
        else otherwise(Value);
    }
}
