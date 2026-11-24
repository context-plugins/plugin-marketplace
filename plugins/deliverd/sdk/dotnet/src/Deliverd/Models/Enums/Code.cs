using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code AgentNotPermitted = new("agent_not_permitted");

    public static readonly Code NotPermitted = new("not_permitted");

    public TResult Match<TResult>(Func<TResult> onAgentNotPermitted,
        Func<TResult> onNotPermitted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AgentNotPermitted => onAgentNotPermitted(),
            _ when this == NotPermitted => onNotPermitted(),
            _ => otherwise(Value)
        };

    public void Match(Action onAgentNotPermitted, Action onNotPermitted, Action<string> otherwise)
    {
        if (this == AgentNotPermitted) onAgentNotPermitted();
        else if (this == NotPermitted) onNotPermitted();
        else otherwise(Value);
    }
}
