using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Type classification of the folder
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FolderType>))]
public sealed record FolderType : OpenStringEnum<FolderType>
{
    private FolderType(string value) : base(value)
    {
    }

    public static readonly FolderType Standard = new("Standard");

    public static readonly FolderType Personal = new("Personal");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onPersonal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Personal => onPersonal(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onPersonal, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Personal) onPersonal();
        else otherwise(Value);
    }
}
