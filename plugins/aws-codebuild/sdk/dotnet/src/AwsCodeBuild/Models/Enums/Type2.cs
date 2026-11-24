using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of the file system. The one supported type is EFS.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2>))]
public sealed record Type2 : OpenStringEnum<Type2>
{
    private Type2(string value) : base(value)
    {
    }

    public static readonly Type2 Efs = new("EFS");

    public TResult Match<TResult>(Func<TResult> onEfs, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Efs => onEfs(),
            _ => otherwise(Value)
        };

    public void Match(Action onEfs, Action<string> otherwise)
    {
        if (this == Efs) onEfs();
        else otherwise(Value);
    }
}
