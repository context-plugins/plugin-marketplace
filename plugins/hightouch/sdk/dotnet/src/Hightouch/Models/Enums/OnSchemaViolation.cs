using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// What happens to events that violate the schema.
/// One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to BLOCK_EVENT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OnSchemaViolation>))]
public sealed record OnSchemaViolation : OpenStringEnum<OnSchemaViolation>
{
    private OnSchemaViolation(string value) : base(value)
    {
    }

    public static readonly OnSchemaViolation AllowEvent = new("ALLOW_EVENT");

    public static readonly OnSchemaViolation BlockEvent = new("BLOCK_EVENT");

    public TResult Match<TResult>(Func<TResult> onAllowEvent,
        Func<TResult> onBlockEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllowEvent => onAllowEvent(),
            _ when this == BlockEvent => onBlockEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowEvent, Action onBlockEvent, Action<string> otherwise)
    {
        if (this == AllowEvent) onAllowEvent();
        else if (this == BlockEvent) onBlockEvent();
        else otherwise(Value);
    }
}
