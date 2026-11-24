using System.Text.Json;
using Compabase.Core.Webhooks;
using Compabase.Models;

namespace Compabase.Webhooks;

public sealed class CompabaseWebhookParser : WebhookEventParser<CompabaseWebhookEvent>
{
    private readonly JsonSerializerOptions _serializerOptions = new();

    protected override CompabaseWebhookEvent CreateEvent(JsonElement root, WebhookRequest request) =>
        new(ReadPayload<WatchlistWebhookEvent>(root, _serializerOptions));
}
