using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// What happens to events that aren't defined in the contract.
/// One of ALLOW_EVENT or BLOCK_EVENT. Optional, defaults to ALLOW_EVENT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OnUndeclaredSchema2>))]
public sealed record OnUndeclaredSchema2 : OpenStringEnum<OnUndeclaredSchema2>
{
    private OnUndeclaredSchema2(string value) : base(value)
    {
    }

    public static readonly OnUndeclaredSchema2 AllowEvent = new("ALLOW_EVENT");

    public static readonly OnUndeclaredSchema2 BlockEvent = new("BLOCK_EVENT");

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
