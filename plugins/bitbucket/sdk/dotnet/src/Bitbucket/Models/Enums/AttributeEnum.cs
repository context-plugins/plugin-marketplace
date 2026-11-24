using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributeEnum>))]
public sealed record AttributeEnum : OpenStringEnum<AttributeEnum>
{
    private AttributeEnum(string value) : base(value)
    {
    }

    public static readonly AttributeEnum Public = new("public");

    public static readonly AttributeEnum ReadOnly = new("read_only");

    public TResult Match<TResult>(Func<TResult> onPublic, Func<TResult> onReadOnly, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == ReadOnly => onReadOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic, Action onReadOnly, Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == ReadOnly) onReadOnly();
        else otherwise(Value);
    }
}
