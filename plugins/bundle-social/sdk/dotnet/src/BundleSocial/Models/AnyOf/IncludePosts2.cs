using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BundleSocial.Core.Extensions;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models.AnyOf;

[JsonConverter(typeof(IncludePosts2Converter))]
public record IncludePosts2
{
    private readonly Optional<bool> _boolValue;

    private readonly Optional<IncludePosts> _includePostsValue;

    private readonly Optional<IncludePosts1> _includePosts1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private IncludePosts2(Optional<bool> boolValue,
        Optional<IncludePosts> includePostsValue,
        Optional<IncludePosts1> includePosts1Value,
        Optional<UnknownArm> unknownValue)
    {
        _boolValue = boolValue;
        _includePostsValue = includePostsValue;
        _includePosts1Value = includePosts1Value;
        _unknownValue = unknownValue;
    }

    public static IncludePosts2 Bool(bool value) => new(Optional<bool>.Some(value), default, default, default);

    public static IncludePosts2 IncludePosts(IncludePosts value) =>
        new(default, Optional<IncludePosts>.Some(value), default, default);

    public static IncludePosts2 IncludePosts1(IncludePosts1 value) =>
        new(default, default, Optional<IncludePosts1>.Some(value), default);

    internal static IncludePosts2 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBool(out bool value) => _boolValue.TryGetValue(out value);

    public bool TryGetIncludePosts([NotNullWhen(true)] out IncludePosts? value) =>
        _includePostsValue.TryGetValue(out value);

    public bool TryGetIncludePosts1([NotNullWhen(true)] out IncludePosts1? value) =>
        _includePosts1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator IncludePosts2(bool value) => Bool(value);

    public static implicit operator IncludePosts2(IncludePosts value) => IncludePosts(value);

    public static implicit operator IncludePosts2(IncludePosts1 value) => IncludePosts1(value);

    public TResult Match<TResult>(Func<bool, TResult> onBool,
        Func<IncludePosts, TResult> onIncludePosts,
        Func<IncludePosts1, TResult> onIncludePosts1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBool(out var boolValue) => onBool(boolValue),
            _ when TryGetIncludePosts(out var includePostsValue) => onIncludePosts(includePostsValue),
            _ when TryGetIncludePosts1(out var includePosts1Value) => onIncludePosts1(includePosts1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(IncludePosts2)} holds no value.")
        };

    public void Match(Action<bool> onBool,
        Action<IncludePosts> onIncludePosts,
        Action<IncludePosts1> onIncludePosts1,
        Action<JsonElement> otherwise)
    {
        if (TryGetBool(out var boolValue)) onBool(boolValue);
        else if (TryGetIncludePosts(out var includePostsValue)) onIncludePosts(includePostsValue);
        else if (TryGetIncludePosts1(out var includePosts1Value)) onIncludePosts1(includePosts1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(IncludePosts2)} holds no value.");
    }
}

file sealed class IncludePosts2Converter : JsonConverter<IncludePosts2>
{
    public override IncludePosts2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<bool>(root, options, out var boolValue))
        {
            return IncludePosts2.Bool(boolValue);
        }
        if (JsonSerializer.TryDeserialize<IncludePosts>(root, options, out var includePostsValue))
        {
            return IncludePosts2.IncludePosts(includePostsValue);
        }
        if (JsonSerializer.TryDeserialize<IncludePosts1>(root, options, out var includePosts1Value))
        {
            return IncludePosts2.IncludePosts1(includePosts1Value);
        }
        return IncludePosts2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, IncludePosts2 value, JsonSerializerOptions options)
    {
        if (value.TryGetBool(out var boolValue))
        {
            JsonSerializer.Serialize(writer, boolValue, options);
        }
        else if (value.TryGetIncludePosts(out var includePostsValue))
        {
            JsonSerializer.Serialize(writer, includePostsValue, options);
        }
        else if (value.TryGetIncludePosts1(out var includePosts1Value))
        {
            JsonSerializer.Serialize(writer, includePosts1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(IncludePosts2)} contains no valid value to serialize.");
        }
    }
}
