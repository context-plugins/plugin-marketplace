using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The type of the attachment. Must be one of the given values. If not specified, a file attachment of type <c>asana</c> will be assumed. Note that if the value of <c>resource_subtype</c> is <c>external</c>, a <c>parent</c>, <c>name</c>, and <c>url</c> must also be provided.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceSubtype1>))]
public sealed record ResourceSubtype1 : OpenStringEnum<ResourceSubtype1>
{
    private ResourceSubtype1(string value) : base(value)
    {
    }

    public static readonly ResourceSubtype1 Asana = new("asana");

    public static readonly ResourceSubtype1 Dropbox = new("dropbox");

    public static readonly ResourceSubtype1 Gdrive = new("gdrive");

    public static readonly ResourceSubtype1 Onedrive = new("onedrive");

    public static readonly ResourceSubtype1 Box = new("box");

    public static readonly ResourceSubtype1 Vimeo = new("vimeo");

    public static readonly ResourceSubtype1 External = new("external");

    public TResult Match<TResult>(Func<TResult> onAsana,
        Func<TResult> onDropbox,
        Func<TResult> onGdrive,
        Func<TResult> onOnedrive,
        Func<TResult> onBox,
        Func<TResult> onVimeo,
        Func<TResult> onExternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Asana => onAsana(),
            _ when this == Dropbox => onDropbox(),
            _ when this == Gdrive => onGdrive(),
            _ when this == Onedrive => onOnedrive(),
            _ when this == Box => onBox(),
            _ when this == Vimeo => onVimeo(),
            _ when this == External => onExternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsana,
        Action onDropbox,
        Action onGdrive,
        Action onOnedrive,
        Action onBox,
        Action onVimeo,
        Action onExternal,
        Action<string> otherwise)
    {
        if (this == Asana) onAsana();
        else if (this == Dropbox) onDropbox();
        else if (this == Gdrive) onGdrive();
        else if (this == Onedrive) onOnedrive();
        else if (this == Box) onBox();
        else if (this == Vimeo) onVimeo();
        else if (this == External) onExternal();
        else otherwise(Value);
    }
}
