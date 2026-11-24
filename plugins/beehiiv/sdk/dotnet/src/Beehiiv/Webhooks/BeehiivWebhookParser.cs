using System.Text.Json;
using Beehiiv.Core.Webhooks;

namespace Beehiiv.Webhooks;

public sealed class BeehiivWebhookParser : WebhookEventParser<BeehiivWebhookEvent>
{
    private readonly JsonSerializerOptions _serializerOptions = new();

    protected override BeehiivWebhookEvent CreateEvent(JsonElement root, WebhookRequest request) =>
        new(ReadPayload<BeehiivEventPayload>(root, _serializerOptions));
}
