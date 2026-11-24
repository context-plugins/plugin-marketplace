using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(StatePlinthUsGrantsDataOrganizationsApiConverter))]
public record StatePlinthUsGrantsDataOrganizationsApi
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private StatePlinthUsGrantsDataOrganizationsApi(Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static StatePlinthUsGrantsDataOrganizationsApi AnonymousObject(object value) =>
        new(Optional<object>.Some(value), default);

    internal static StatePlinthUsGrantsDataOrganizationsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(StatePlinthUsGrantsDataOrganizationsApi)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(StatePlinthUsGrantsDataOrganizationsApi)} holds no value.");
    }
}

file sealed class StatePlinthUsGrantsDataOrganizationsApiConverter : JsonConverter<StatePlinthUsGrantsDataOrganizationsApi>
{
    public override StatePlinthUsGrantsDataOrganizationsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return StatePlinthUsGrantsDataOrganizationsApi.AnonymousObject(anonymousObjectValue);
        }
        return StatePlinthUsGrantsDataOrganizationsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        StatePlinthUsGrantsDataOrganizationsApi value,
        JsonSerializerOptions options)
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
            throw new JsonException(
                $"{nameof(StatePlinthUsGrantsDataOrganizationsApi)} contains no valid value to serialize.");
        }
    }
}
