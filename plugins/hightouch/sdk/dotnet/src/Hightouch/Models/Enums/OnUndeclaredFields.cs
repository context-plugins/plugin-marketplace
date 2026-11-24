using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// What happens to events that contain fields not in the schema.
/// One of ALLOW_EVENT, BLOCK_EVENT, or OMIT_FIELDS. Optional, defaults to OMIT_FIELDS.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OnUndeclaredFields>))]
public sealed record OnUndeclaredFields : OpenStringEnum<OnUndeclaredFields>
{
    private OnUndeclaredFields(string value) : base(value)
    {
    }

    public static readonly OnUndeclaredFields AllowEvent = new("ALLOW_EVENT");

    public static readonly OnUndeclaredFields BlockEvent = new("BLOCK_EVENT");

    public static readonly OnUndeclaredFields OmitFields = new("OMIT_FIELDS");

    public TResult Match<TResult>(Func<TResult> onAllowEvent,
        Func<TResult> onBlockEvent,
        Func<TResult> onOmitFields,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllowEvent => onAllowEvent(),
            _ when this == BlockEvent => onBlockEvent(),
            _ when this == OmitFields => onOmitFields(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowEvent, Action onBlockEvent, Action onOmitFields, Action<string> otherwise)
    {
        if (this == AllowEvent) onAllowEvent();
        else if (this == BlockEvent) onBlockEvent();
        else if (this == OmitFields) onOmitFields();
        else otherwise(Value);
    }
}
