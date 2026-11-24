using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ItemType>))]
public sealed record ItemType : OpenStringEnum<ItemType>
{
    private ItemType(string value) : base(value)
    {
    }

    public static readonly ItemType Directory = new("directory");

    public static readonly ItemType Image = new("image");

    public static readonly ItemType File = new("file");

    public TResult Match<TResult>(Func<TResult> onDirectory,
        Func<TResult> onImage,
        Func<TResult> onFile,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Directory => onDirectory(),
            _ when this == Image => onImage(),
            _ when this == File => onFile(),
            _ => otherwise(Value)
        };

    public void Match(Action onDirectory, Action onImage, Action onFile, Action<string> otherwise)
    {
        if (this == Directory) onDirectory();
        else if (this == Image) onImage();
        else if (this == File) onFile();
        else otherwise(Value);
    }
}
