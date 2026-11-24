using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Compabase.Core.Extensions;

internal static class JsonSerializerExtensions
{
    private static readonly ConcurrentDictionary<Type, JsonSerializerOptions> WebOptionsCache = new();

    extension(JsonConverter? converter)
    {
        public JsonSerializerOptions ToWebOptions() =>
            converter is null
                ? JsonSerializerOptions.Web
                : WebOptionsCache.GetOrAdd(converter.GetType(),
                    _ => new JsonSerializerOptions(JsonSerializerDefaults.Web) { Converters = { converter } });
    }

    extension(JsonSerializer)
    {
        public static bool TryDeserialize<T>(JsonElement element, JsonSerializerOptions options,
            [NotNullWhen(true)] out T? result)
        {
            try
            {
                var deserialized = element.Deserialize<T>(options);
                if (deserialized is null)
                {
                    result = default;
                    return false;
                }

                result = deserialized;
                return true;
            }
            catch (Exception ex) when (ex is JsonException or NotSupportedException)
            {
                result = default;
                return false;
            }
        }
    }

    extension(Utf8JsonWriter writer)
    {
        public void WriteUnwritten(JsonElement value, ISet<string> written)
        {
            foreach (var property in value.EnumerateObject())
            {
                if (written.Add(property.Name))
                    property.WriteTo(writer);
            }
        }

        public void WriteUnwritten(IEnumerable<KeyValuePair<string, JsonElement>> extras, ISet<string> written)
        {
            foreach (var pair in extras)
            {
                if (!written.Add(pair.Key))
                    continue;

                writer.WritePropertyName(pair.Key);
                pair.Value.WriteTo(writer);
            }
        }
    }
}
