using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ChannelDoiTSignupApi>))]
public sealed record ChannelDoiTSignupApi : OpenStringEnum<ChannelDoiTSignupApi>
{
    private ChannelDoiTSignupApi(string value) : base(value)
    {
    }

    public static readonly ChannelDoiTSignupApi Agent = new("agent");

    public static readonly ChannelDoiTSignupApi Console = new("console");

    public static readonly ChannelDoiTSignupApi Web = new("web");

    public TResult Match<TResult>(Func<TResult> onAgent,
        Func<TResult> onConsole,
        Func<TResult> onWeb,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Agent => onAgent(),
            _ when this == Console => onConsole(),
            _ when this == Web => onWeb(),
            _ => otherwise(Value)
        };

    public void Match(Action onAgent, Action onConsole, Action onWeb, Action<string> otherwise)
    {
        if (this == Agent) onAgent();
        else if (this == Console) onConsole();
        else if (this == Web) onWeb();
        else otherwise(Value);
    }
}
