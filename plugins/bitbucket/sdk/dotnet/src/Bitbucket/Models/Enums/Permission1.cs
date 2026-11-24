using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Permission1>))]
public sealed record Permission1 : OpenStringEnum<Permission1>
{
    private Permission1(string value) : base(value)
    {
    }

    public static readonly Permission1 Read = new("read");

    public static readonly Permission1 Write = new("write");

    public static readonly Permission1 CreateRepo = new("create-repo");

    public static readonly Permission1 Admin = new("admin");

    public static readonly Permission1 None = new("none");

    public TResult Match<TResult>(Func<TResult> onRead,
        Func<TResult> onWrite,
        Func<TResult> onCreateRepo,
        Func<TResult> onAdmin,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == Write => onWrite(),
            _ when this == CreateRepo => onCreateRepo(),
            _ when this == Admin => onAdmin(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead,
        Action onWrite,
        Action onCreateRepo,
        Action onAdmin,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == Write) onWrite();
        else if (this == CreateRepo) onCreateRepo();
        else if (this == Admin) onAdmin();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
