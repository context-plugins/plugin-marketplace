using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PermissionAction>))]
public sealed record PermissionAction : OpenStringEnum<PermissionAction>
{
    private PermissionAction(string value) : base(value)
    {
    }

    public static readonly PermissionAction Read = new("read");

    public static readonly PermissionAction Write = new("write");

    public TResult Match<TResult>(Func<TResult> onRead, Func<TResult> onWrite, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Read => onRead(),
            _ when this == Write => onWrite(),
            _ => otherwise(Value)
        };

    public void Match(Action onRead, Action onWrite, Action<string> otherwise)
    {
        if (this == Read) onRead();
        else if (this == Write) onWrite();
        else otherwise(Value);
    }
}
