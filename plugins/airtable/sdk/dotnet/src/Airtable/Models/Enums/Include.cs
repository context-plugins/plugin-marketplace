using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Include>))]
public sealed record Include : OpenStringEnum<Include>
{
    private Include(string value) : base(value)
    {
    }

    public static readonly Include VisibleFieldIds = new("visibleFieldIds");

    public TResult Match<TResult>(Func<TResult> onVisibleFieldIds, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VisibleFieldIds => onVisibleFieldIds(),
            _ => otherwise(Value)
        };

    public void Match(Action onVisibleFieldIds, Action<string> otherwise)
    {
        if (this == VisibleFieldIds) onVisibleFieldIds();
        else otherwise(Value);
    }
}
