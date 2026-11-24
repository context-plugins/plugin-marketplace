using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Extensions;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models.AnyOf;

[JsonConverter(typeof(Data81Converter))]
public record Data81
{
    private readonly Optional<BaseInheritance> _baseInheritanceValue;

    private readonly Optional<ApplicationBypassUpdateBody> _applicationBypassUpdateBodyValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Data81(Optional<BaseInheritance> baseInheritanceValue,
        Optional<ApplicationBypassUpdateBody> applicationBypassUpdateBodyValue,
        Optional<UnknownArm> unknownValue)
    {
        _baseInheritanceValue = baseInheritanceValue;
        _applicationBypassUpdateBodyValue = applicationBypassUpdateBodyValue;
        _unknownValue = unknownValue;
    }

    public static Data81 BaseInheritance(BaseInheritance value) =>
        new(Optional<BaseInheritance>.Some(value), default, default);

    public static Data81 ApplicationBypassUpdateBody(ApplicationBypassUpdateBody value) =>
        new(default, Optional<ApplicationBypassUpdateBody>.Some(value), default);

    internal static Data81 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBaseInheritance([NotNullWhen(true)] out BaseInheritance? value) =>
        _baseInheritanceValue.TryGetValue(out value);

    public bool TryGetApplicationBypassUpdateBody([NotNullWhen(true)] out ApplicationBypassUpdateBody? value) =>
        _applicationBypassUpdateBodyValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Data81(BaseInheritance value) => BaseInheritance(value);

    public static implicit operator Data81(ApplicationBypassUpdateBody value) => ApplicationBypassUpdateBody(value);

    public TResult Match<TResult>(Func<BaseInheritance, TResult> onBaseInheritance,
        Func<ApplicationBypassUpdateBody, TResult> onApplicationBypassUpdateBody,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBaseInheritance(out var baseInheritanceValue) => onBaseInheritance(baseInheritanceValue),
            _ when TryGetApplicationBypassUpdateBody(
                out var applicationBypassUpdateBodyValue) => onApplicationBypassUpdateBody(
                applicationBypassUpdateBodyValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Data81)} holds no value.")
        };

    public void Match(Action<BaseInheritance> onBaseInheritance,
        Action<ApplicationBypassUpdateBody> onApplicationBypassUpdateBody,
        Action<JsonElement> otherwise)
    {
        if (TryGetBaseInheritance(out var baseInheritanceValue)) onBaseInheritance(baseInheritanceValue);
        else if (TryGetApplicationBypassUpdateBody(
            out var applicationBypassUpdateBodyValue)) onApplicationBypassUpdateBody(applicationBypassUpdateBodyValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Data81)} holds no value.");
    }
}

file sealed class Data81Converter : JsonConverter<Data81>
{
    public override Data81 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<BaseInheritance>(root, options, out var baseInheritanceValue))
        {
            return Data81.BaseInheritance(baseInheritanceValue);
        }
        if (JsonSerializer.TryDeserialize<ApplicationBypassUpdateBody>(
            root,
            options,
            out var applicationBypassUpdateBodyValue))
        {
            return Data81.ApplicationBypassUpdateBody(applicationBypassUpdateBodyValue);
        }
        return Data81.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Data81 value, JsonSerializerOptions options)
    {
        if (value.TryGetBaseInheritance(out var baseInheritanceValue))
        {
            JsonSerializer.Serialize(writer, baseInheritanceValue, options);
        }
        else if (value.TryGetApplicationBypassUpdateBody(out var applicationBypassUpdateBodyValue))
        {
            JsonSerializer.Serialize(writer, applicationBypassUpdateBodyValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Data81)} contains no valid value to serialize.");
        }
    }
}
