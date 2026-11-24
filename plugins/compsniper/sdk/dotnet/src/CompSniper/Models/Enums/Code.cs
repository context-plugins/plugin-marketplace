using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Code>))]
public sealed record Code : OpenStringEnum<Code>
{
    private Code(string value) : base(value)
    {
    }

    public static readonly Code UpstreamBlocked = new("upstream_blocked");

    public static readonly Code EngineError = new("engine_error");

    public TResult Match<TResult>(Func<TResult> onUpstreamBlocked,
        Func<TResult> onEngineError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UpstreamBlocked => onUpstreamBlocked(),
            _ when this == EngineError => onEngineError(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpstreamBlocked, Action onEngineError, Action<string> otherwise)
    {
        if (this == UpstreamBlocked) onUpstreamBlocked();
        else if (this == EngineError) onEngineError();
        else otherwise(Value);
    }
}
