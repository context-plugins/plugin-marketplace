using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text.Json;
using Perigon.Core.Extensions;

namespace Perigon.Core.Models;

public sealed class AdditionalProperties : IDictionary<string, JsonElement>, IEquatable<AdditionalProperties>
{
    private readonly Dictionary<string, JsonElement> _data = [];

    public int Count => _data.Count;

    public IEnumerable<string> Keys => _data.Keys;

    public IEnumerable<JsonElement> Values => _data.Values;

    public JsonElement this[string key]
    {
        get => _data[key];
        set => _data[key] = value.RequireDefined(nameof(value));
    }

    public void Set(string key, object? value) =>
        _data[key] = JsonSerializer.SerializeToElement(value, JsonSerializerOptions.Web);

    public bool TryGetValue<T>(string key, [NotNullWhen(true)] out T? value)
    {
        value = default;
        return _data.TryGetValue(key, out var element) &&
               JsonSerializer.TryDeserialize(element, JsonSerializerOptions.Web, out value);
    }

    public bool TryGetElement(string key, out JsonElement element) => _data.TryGetValue(key, out element);

    public bool ContainsKey(string key) => _data.ContainsKey(key);

    public bool Remove(string key) => _data.Remove(key);

    public void Clear() => _data.Clear();

    public IEnumerator<KeyValuePair<string, JsonElement>> GetEnumerator() => _data.GetEnumerator();

    public bool Equals(AdditionalProperties? other) =>
        ReferenceEquals(this, other) || (other is not null && _data.DeepEquals(other._data));

    public override bool Equals(object? obj) => Equals(obj as AdditionalProperties);

    public override int GetHashCode() => _data.DeepHashCode();

    internal static AdditionalProperties SharedBy(params ReadOnlySpan<IDictionary<string, JsonElement>> bags)
    {
        var shared = new AdditionalProperties();
        if (bags.IsEmpty)
            return shared;

        foreach (var pair in bags[0])
        {
            var everywhere = true;
            for (var i = 1; i < bags.Length && everywhere; i++)
                everywhere = bags[i].ContainsKey(pair.Key);

            if (everywhere)
                shared._data[pair.Key] = pair.Value;
        }

        return shared;
    }

    ICollection<string> IDictionary<string, JsonElement>.Keys => _data.Keys;

    ICollection<JsonElement> IDictionary<string, JsonElement>.Values => _data.Values;

    bool ICollection<KeyValuePair<string, JsonElement>>.IsReadOnly => false;

    void IDictionary<string, JsonElement>.Add(string key, JsonElement value) => _data.Add(key, value.RequireDefined(nameof(value)));

    bool IDictionary<string, JsonElement>.TryGetValue(string key, out JsonElement value) => _data.TryGetValue(key, out value);

    void ICollection<KeyValuePair<string, JsonElement>>.Add(KeyValuePair<string, JsonElement> item) =>
        _data.Add(item.Key, item.Value.RequireDefined(nameof(item)));

    bool ICollection<KeyValuePair<string, JsonElement>>.Contains(KeyValuePair<string, JsonElement> item) => _data.DeepContains(item);

    void ICollection<KeyValuePair<string, JsonElement>>.CopyTo(KeyValuePair<string, JsonElement>[] array, int arrayIndex) =>
        ((ICollection<KeyValuePair<string, JsonElement>>)_data).CopyTo(array, arrayIndex);

    bool ICollection<KeyValuePair<string, JsonElement>>.Remove(KeyValuePair<string, JsonElement> item) =>
        _data.DeepContains(item) && _data.Remove(item.Key);

    IEnumerator IEnumerable.GetEnumerator() => _data.GetEnumerator();
}

public sealed class AdditionalProperties<TValue> : IDictionary<string, JsonElement>, IEquatable<AdditionalProperties<TValue>>
{
    private readonly Dictionary<string, JsonElement> _data = [];

    public int Count => _data.Count;

    public IEnumerable<string> Keys => _data.Keys;

    public IEnumerable<TValue> Values
    {
        get
        {
            foreach (var pair in this)
                yield return pair.Value;
        }
    }

    public TValue this[string key]
    {
        get => _data[key].ReadRequired<TValue>(key);
        set => _data[key] = JsonSerializer.SerializeToElement(value, JsonSerializerOptions.Web);
    }

    public void Set(string key, TValue value) => this[key] = value;

    public bool TryGetValue(string key, [NotNullWhen(true)] out TValue? value)
    {
        value = default;
        return _data.TryGetValue(key, out var element) &&
               JsonSerializer.TryDeserialize(element, JsonSerializerOptions.Web, out value);
    }

    public bool TryGetElement(string key, out JsonElement element) => _data.TryGetValue(key, out element);

    public bool ContainsKey(string key) => _data.ContainsKey(key);

    public bool Remove(string key) => _data.Remove(key);

    public void Clear() => _data.Clear();

    public IEnumerator<KeyValuePair<string, TValue>> GetEnumerator() =>
        _data
            .Select(pair => new KeyValuePair<string, TValue>(pair.Key, pair.Value.ReadRequired<TValue>(pair.Key)))
            .GetEnumerator();

    public bool Equals(AdditionalProperties<TValue>? other) =>
        ReferenceEquals(this, other) || (other is not null && _data.DeepEquals(other._data));

    public override bool Equals(object? obj) => Equals(obj as AdditionalProperties<TValue>);

    public override int GetHashCode() => _data.DeepHashCode();

    ICollection<string> IDictionary<string, JsonElement>.Keys => _data.Keys;

    ICollection<JsonElement> IDictionary<string, JsonElement>.Values => _data.Values;

    bool ICollection<KeyValuePair<string, JsonElement>>.IsReadOnly => false;

    JsonElement IDictionary<string, JsonElement>.this[string key]
    {
        get => _data[key];
        set => _data[key] = value.RequireDefined(nameof(value));
    }

    void IDictionary<string, JsonElement>.Add(string key, JsonElement value) => _data.Add(key, value.RequireDefined(nameof(value)));

    bool IDictionary<string, JsonElement>.TryGetValue(string key, out JsonElement value) => _data.TryGetValue(key, out value);

    void ICollection<KeyValuePair<string, JsonElement>>.Add(KeyValuePair<string, JsonElement> item) =>
        _data.Add(item.Key, item.Value.RequireDefined(nameof(item)));

    bool ICollection<KeyValuePair<string, JsonElement>>.Contains(KeyValuePair<string, JsonElement> item) => _data.DeepContains(item);

    void ICollection<KeyValuePair<string, JsonElement>>.CopyTo(KeyValuePair<string, JsonElement>[] array, int arrayIndex) =>
        ((ICollection<KeyValuePair<string, JsonElement>>)_data).CopyTo(array, arrayIndex);

    bool ICollection<KeyValuePair<string, JsonElement>>.Remove(KeyValuePair<string, JsonElement> item) =>
        _data.DeepContains(item) && _data.Remove(item.Key);

    IEnumerator<KeyValuePair<string, JsonElement>> IEnumerable<KeyValuePair<string, JsonElement>>.GetEnumerator() =>
        _data.GetEnumerator();

    IEnumerator IEnumerable.GetEnumerator() => _data.GetEnumerator();
}

file static class JsonElementExtensions
{
    extension(Dictionary<string, JsonElement> data)
    {
        public bool DeepEquals(Dictionary<string, JsonElement> other)
        {
            if (data.Count != other.Count)
                return false;

            foreach (var pair in data)
            {
                if (!other.TryGetValue(pair.Key, out var element) || !JsonElement.DeepEquals(pair.Value, element))
                    return false;
            }

            return true;
        }

        public int DeepHashCode()
        {
            var hash = data.Count;
            foreach (var key in data.Keys)
                hash ^= StringComparer.Ordinal.GetHashCode(key);
            return hash;
        }

        public bool DeepContains(KeyValuePair<string, JsonElement> pair) =>
            pair.Value.ValueKind is not JsonValueKind.Undefined &&
            data.TryGetValue(pair.Key, out var existing) && JsonElement.DeepEquals(existing, pair.Value);
    }

    extension(JsonElement element)
    {
        public JsonElement RequireDefined(string paramName) =>
            element.ValueKind is not JsonValueKind.Undefined
                ? element
                : throw new ArgumentException("Additional property values cannot be an undefined JsonElement.", paramName);

        public T ReadRequired<T>(string key) =>
            element.Deserialize<T>(JsonSerializerOptions.Web)
            ?? throw new JsonException($"Additional property '{key}' is null.");
    }
}
