using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Value>))]
public sealed record Value : OpenStringEnum<Value>
{
    private Value(string value) : base(value)
    {
    }

    public static readonly Value OrderAsc = new("order_asc");

    public static readonly Value NameAsc = new("name_asc");

    public static readonly Value CreatedAtDesc = new("created_at_desc");

    public TResult Match<TResult>(Func<TResult> onOrderAsc,
        Func<TResult> onNameAsc,
        Func<TResult> onCreatedAtDesc,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OrderAsc => onOrderAsc(),
            _ when this == NameAsc => onNameAsc(),
            _ when this == CreatedAtDesc => onCreatedAtDesc(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrderAsc, Action onNameAsc, Action onCreatedAtDesc, Action<string> otherwise)
    {
        if (this == OrderAsc) onOrderAsc();
        else if (this == NameAsc) onNameAsc();
        else if (this == CreatedAtDesc) onCreatedAtDesc();
        else otherwise(Value);
    }
}
