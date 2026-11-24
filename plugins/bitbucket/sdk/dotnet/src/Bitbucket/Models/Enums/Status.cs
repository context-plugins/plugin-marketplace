using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Added = new("added");

    public static readonly Status Removed = new("removed");

    public static readonly Status Modified = new("modified");

    public static readonly Status Renamed = new("renamed");

    public TResult Match<TResult>(Func<TResult> onAdded,
        Func<TResult> onRemoved,
        Func<TResult> onModified,
        Func<TResult> onRenamed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Added => onAdded(),
            _ when this == Removed => onRemoved(),
            _ when this == Modified => onModified(),
            _ when this == Renamed => onRenamed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdded, Action onRemoved, Action onModified, Action onRenamed, Action<string> otherwise)
    {
        if (this == Added) onAdded();
        else if (this == Removed) onRemoved();
        else if (this == Modified) onModified();
        else if (this == Renamed) onRenamed();
        else otherwise(Value);
    }
}
