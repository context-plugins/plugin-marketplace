using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The access level of the folder within the workspace.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccessLevel>))]
public sealed record AccessLevel : OpenStringEnum<AccessLevel>
{
    private AccessLevel(string value) : base(value)
    {
    }

    public static readonly AccessLevel Write = new("write");

    public static readonly AccessLevel Read = new("read");

    public TResult Match<TResult>(Func<TResult> onWrite, Func<TResult> onRead, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Write => onWrite(),
            _ when this == Read => onRead(),
            _ => otherwise(Value)
        };

    public void Match(Action onWrite, Action onRead, Action<string> otherwise)
    {
        if (this == Write) onWrite();
        else if (this == Read) onRead();
        else otherwise(Value);
    }
}
