using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum JidMonitorEvents = new("jid.monitor.events");

    public TResult Match<TResult>(Func<TResult> onJidMonitorEvents, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JidMonitorEvents => onJidMonitorEvents(),
            _ => otherwise(Value)
        };

    public void Match(Action onJidMonitorEvents, Action<string> otherwise)
    {
        if (this == JidMonitorEvents) onJidMonitorEvents();
        else otherwise(Value);
    }
}
