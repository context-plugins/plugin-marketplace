using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Permission>))]
public sealed record Permission : OpenStringEnum<Permission>
{
    private Permission(string value) : base(value)
    {
    }

    public static readonly Permission Read = new("read");

    public static readonly Permission Write = new("write");

    public static readonly Permission CreateRepo = new("create-repo");

    public static readonly Permission Admin = new("admin");

    public TResult Match<TResult>(Func<TResult> onRead,
        Func<TResult> onWrite,
        Func<TResult> onCreateRepo,
        Func<TResult> onAdmin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == Write => onWrite(),
            _ when this == CreateRepo => onCreateRepo(),
            _ when this == Admin => onAdmin(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead, Action onWrite, Action onCreateRepo, Action onAdmin, Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == Write) onWrite();
        else if (this == CreateRepo) onCreateRepo();
        else if (this == Admin) onAdmin();
        else otherwise(Value);
    }
}
