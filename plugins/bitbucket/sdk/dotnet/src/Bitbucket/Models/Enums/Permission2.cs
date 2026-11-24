using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Permission2>))]
public sealed record Permission2 : OpenStringEnum<Permission2>
{
    private Permission2(string value) : base(value)
    {
    }

    public static readonly Permission2 Read = new("read");

    public static readonly Permission2 Write = new("write");

    public static readonly Permission2 Admin = new("admin");

    public TResult Match<TResult>(Func<TResult> onRead,
        Func<TResult> onWrite,
        Func<TResult> onAdmin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == Write => onWrite(),
            _ when this == Admin => onAdmin(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead, Action onWrite, Action onAdmin, Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == Write) onWrite();
        else if (this == Admin) onAdmin();
        else otherwise(Value);
    }
}
