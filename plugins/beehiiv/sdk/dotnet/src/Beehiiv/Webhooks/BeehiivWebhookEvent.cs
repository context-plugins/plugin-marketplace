using Beehiiv.Core.Webhooks;

namespace Beehiiv.Webhooks;

public record BeehiivWebhookEvent : WebhookEvent<BeehiivEventPayload>
{
    internal BeehiivWebhookEvent(BeehiivEventPayload payload) : base(payload)
    {
    }
}
