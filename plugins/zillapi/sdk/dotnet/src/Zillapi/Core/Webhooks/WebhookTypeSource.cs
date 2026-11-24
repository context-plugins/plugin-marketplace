using System;
using System.Text.Json;

namespace Zillapi.Core.Webhooks;

internal abstract record WebhookTypeSource
{
    internal abstract string? Resolve(JsonElement root, Func<string, string?> resolveHeader);

    public sealed record Body(string PropertyName) : WebhookTypeSource
    {
        internal override string? Resolve(JsonElement root, Func<string, string?> resolveHeader) =>
            root.TryGetProperty(PropertyName, out var element)
            && element.ValueKind == JsonValueKind.String
                ? element.GetString()
                : null;
    }

    public sealed record Header(string Name) : WebhookTypeSource
    {
        internal override string? Resolve(JsonElement root, Func<string, string?> resolveHeader) =>
            resolveHeader(Name);
    }
}
