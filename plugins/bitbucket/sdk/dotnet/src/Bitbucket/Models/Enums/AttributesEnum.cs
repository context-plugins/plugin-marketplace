using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributesEnum>))]
public sealed record AttributesEnum : OpenStringEnum<AttributesEnum>
{
    private AttributesEnum(string value) : base(value)
    {
    }

    public static readonly AttributesEnum Link = new("link");

    public static readonly AttributesEnum Executable = new("executable");

    public static readonly AttributesEnum Subrepository = new("subrepository");

    public static readonly AttributesEnum Binary = new("binary");

    public static readonly AttributesEnum Lfs = new("lfs");

    public TResult Match<TResult>(Func<TResult> onLink,
        Func<TResult> onExecutable,
        Func<TResult> onSubrepository,
        Func<TResult> onBinary,
        Func<TResult> onLfs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Link => onLink(),
            _ when this == Executable => onExecutable(),
            _ when this == Subrepository => onSubrepository(),
            _ when this == Binary => onBinary(),
            _ when this == Lfs => onLfs(),
            _ => otherwise(Value)
        };

    public void Match(Action onLink,
        Action onExecutable,
        Action onSubrepository,
        Action onBinary,
        Action onLfs,
        Action<string> otherwise)
    {
        if (this == Link) onLink();
        else if (this == Executable) onExecutable();
        else if (this == Subrepository) onSubrepository();
        else if (this == Binary) onBinary();
        else if (this == Lfs) onLfs();
        else otherwise(Value);
    }
}
