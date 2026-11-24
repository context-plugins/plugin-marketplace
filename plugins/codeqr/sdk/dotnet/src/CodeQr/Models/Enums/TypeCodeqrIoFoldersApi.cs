using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeCodeqrIoFoldersApi>))]
public sealed record TypeCodeqrIoFoldersApi : OpenStringEnum<TypeCodeqrIoFoldersApi>
{
    private TypeCodeqrIoFoldersApi(string value) : base(value)
    {
    }

    public static readonly TypeCodeqrIoFoldersApi Default = new("default");

    public static readonly TypeCodeqrIoFoldersApi Templates = new("templates");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onTemplates,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == Templates => onTemplates(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault, Action onTemplates, Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == Templates) onTemplates();
        else otherwise(Value);
    }
}
