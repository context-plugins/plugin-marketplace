using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IncludeRecord>))]
public sealed record IncludeRecord : OpenStringEnum<IncludeRecord>
{
    private IncludeRecord(string value) : base(value)
    {
    }

    public static readonly IncludeRecord Created = new("created");

    public static readonly IncludeRecord All = new("all");

    public TResult Match<TResult>(Func<TResult> onCreated, Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onAll, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
