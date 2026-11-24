using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Extensions;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models.AnyOf;

[JsonConverter(typeof(Data61Converter))]
public record Data61
{
    private readonly Optional<BaseInheritance> _baseInheritanceValue;

    private readonly Optional<UrlBypassUpdateBody> _urlBypassUpdateBodyValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Data61(Optional<BaseInheritance> baseInheritanceValue,
        Optional<UrlBypassUpdateBody> urlBypassUpdateBodyValue,
        Optional<UnknownArm> unknownValue)
    {
        _baseInheritanceValue = baseInheritanceValue;
        _urlBypassUpdateBodyValue = urlBypassUpdateBodyValue;
        _unknownValue = unknownValue;
    }

    public static Data61 BaseInheritance(BaseInheritance value) =>
        new(Optional<BaseInheritance>.Some(value), default, default);

    public static Data61 UrlBypassUpdateBody(UrlBypassUpdateBody value) =>
        new(default, Optional<UrlBypassUpdateBody>.Some(value), default);

    internal static Data61 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBaseInheritance([NotNullWhen(true)] out BaseInheritance? value) =>
        _baseInheritanceValue.TryGetValue(out value);

    public bool TryGetUrlBypassUpdateBody([NotNullWhen(true)] out UrlBypassUpdateBody? value) =>
        _urlBypassUpdateBodyValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Data61(BaseInheritance value) => BaseInheritance(value);

    public static implicit operator Data61(UrlBypassUpdateBody value) => UrlBypassUpdateBody(value);

    public TResult Match<TResult>(Func<BaseInheritance, TResult> onBaseInheritance,
        Func<UrlBypassUpdateBody, TResult> onUrlBypassUpdateBody,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBaseInheritance(out var baseInheritanceValue) => onBaseInheritance(baseInheritanceValue),
            _ when TryGetUrlBypassUpdateBody(out var urlBypassUpdateBodyValue) => onUrlBypassUpdateBody(
                urlBypassUpdateBodyValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Data61)} holds no value.")
        };

    public void Match(Action<BaseInheritance> onBaseInheritance,
        Action<UrlBypassUpdateBody> onUrlBypassUpdateBody,
        Action<JsonElement> otherwise)
    {
        if (TryGetBaseInheritance(out var baseInheritanceValue)) onBaseInheritance(baseInheritanceValue);
        else if (TryGetUrlBypassUpdateBody(out var urlBypassUpdateBodyValue)) onUrlBypassUpdateBody(
            urlBypassUpdateBodyValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Data61)} holds no value.");
    }
}

file sealed class Data61Converter : JsonConverter<Data61>
{
    public override Data61 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<BaseInheritance>(root, options, out var baseInheritanceValue))
        {
            return Data61.BaseInheritance(baseInheritanceValue);
        }
        if (JsonSerializer.TryDeserialize<UrlBypassUpdateBody>(root, options, out var urlBypassUpdateBodyValue))
        {
            return Data61.UrlBypassUpdateBody(urlBypassUpdateBodyValue);
        }
        return Data61.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Data61 value, JsonSerializerOptions options)
    {
        if (value.TryGetBaseInheritance(out var baseInheritanceValue))
        {
            JsonSerializer.Serialize(writer, baseInheritanceValue, options);
        }
        else if (value.TryGetUrlBypassUpdateBody(out var urlBypassUpdateBodyValue))
        {
            JsonSerializer.Serialize(writer, urlBypassUpdateBodyValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Data61)} contains no valid value to serialize.");
        }
    }
}
