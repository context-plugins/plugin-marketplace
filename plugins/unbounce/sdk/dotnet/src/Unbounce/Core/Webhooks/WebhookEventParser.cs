using System.Text.Json;

namespace Unbounce.Core.Webhooks;

public abstract class WebhookEventParser<TEvent>
    where TEvent : class
{
    public TEvent Parse(WebhookRequest request)
    {
        using var doc = JsonDocument.Parse(request.Body);
        var root = doc.RootElement;

        if (root.ValueKind != JsonValueKind.Object)
            throw new JsonException("Event body must be a JSON object.");

        return CreateEvent(root, request);
    }

    protected abstract TEvent CreateEvent(JsonElement root, WebhookRequest request);

    private protected static string ResolveDiscriminator(
        JsonElement root,
        WebhookRequest request,
        WebhookTypeSource source) =>
        source.Resolve(root, name => request.TryGetHeader(name, out var value) ? value : null)
        ?? throw new JsonException("Event body is missing the required discriminator.");

    private protected static TPayload ReadPayload<TPayload>(JsonElement root, JsonSerializerOptions options) =>
        root.Deserialize<TPayload>(options)
        ?? throw new JsonException("Event body must be a JSON object.");
}
