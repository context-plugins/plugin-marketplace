using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum File = new("file");

    public static readonly TypeEnum Directory = new("directory");

    public TResult Match<TResult>(Func<TResult> onFile, Func<TResult> onDirectory, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == File => onFile(),
            _ when this == Directory => onDirectory(),
            _ => otherwise(Value)
        };

    public void Match(Action onFile, Action onDirectory, Action<string> otherwise)
    {
        if (this == File) onFile();
        else if (this == Directory) onDirectory();
        else otherwise(Value);
    }
}
