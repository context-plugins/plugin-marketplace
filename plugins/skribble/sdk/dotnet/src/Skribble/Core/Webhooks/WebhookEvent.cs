using Skribble.Core.Enum;

namespace Skribble.Core.Webhooks;

public abstract record WebhookEvent<TPayload>
{
    internal WebhookEvent(TPayload payload)
    {
        Payload = payload;
    }

    public TPayload Payload { get; }
}

public abstract record WebhookEvent<TType, TPayload> : WebhookEvent<TPayload>
    where TType : StringEnum<TType>
{
    internal WebhookEvent(TType type, TPayload payload) : base(payload)
    {
        Type = type;
    }

    public TType Type { get; }
}
