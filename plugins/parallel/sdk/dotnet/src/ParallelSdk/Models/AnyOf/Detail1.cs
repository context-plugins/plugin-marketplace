using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Optional detail supporting the warning., Optional detail supporting the error., Optional detail supporting the error., Optional detail supporting the error.
/// </summary>
[JsonConverter(typeof(Detail1Converter))]
public record Detail1
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Detail1(Optional<object> anonymousObjectValue, Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static Detail1 AnonymousObject(object value) => new(Optional<object>.Some(value), default);

    internal static Detail1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Detail1)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Detail1)} holds no value.");
    }
}

file sealed class Detail1Converter : JsonConverter<Detail1>
{
    public override Detail1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return Detail1.AnonymousObject(anonymousObjectValue);
        }
        return Detail1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Detail1 value, JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Detail1)} contains no valid value to serialize.");
        }
    }
}
