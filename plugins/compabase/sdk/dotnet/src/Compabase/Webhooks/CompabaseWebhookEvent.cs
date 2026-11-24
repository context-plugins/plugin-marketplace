using Compabase.Core.Webhooks;
using Compabase.Models;

namespace Compabase.Webhooks;

public record CompabaseWebhookEvent : WebhookEvent<WatchlistWebhookEvent>
{
    internal CompabaseWebhookEvent(WatchlistWebhookEvent payload) : base(payload)
    {
    }
}
