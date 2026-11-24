using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(V1CampaignsMembersResponse1Converter))]
public record V1CampaignsMembersResponse1
{
    private readonly Optional<V1CampaignsMembersResponse> _v1CampaignsMembersResponseValue;

    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V1CampaignsMembersResponse1(Optional<V1CampaignsMembersResponse> v1CampaignsMembersResponseValue,
        Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _v1CampaignsMembersResponseValue = v1CampaignsMembersResponseValue;
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static V1CampaignsMembersResponse1 V1CampaignsMembersResponse(V1CampaignsMembersResponse value) =>
        new(Optional<V1CampaignsMembersResponse>.Some(value), default, default);

    public static V1CampaignsMembersResponse1 AnonymousObject(object value) =>
        new(default, Optional<object>.Some(value), default);

    internal static V1CampaignsMembersResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV1CampaignsMembersResponse([NotNullWhen(true)] out V1CampaignsMembersResponse? value) =>
        _v1CampaignsMembersResponseValue.TryGetValue(out value);

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V1CampaignsMembersResponse1(V1CampaignsMembersResponse value) =>
        V1CampaignsMembersResponse(value);

    public TResult Match<TResult>(Func<V1CampaignsMembersResponse, TResult> onV1CampaignsMembersResponse,
        Func<object, TResult> onAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1CampaignsMembersResponse(
                out var v1CampaignsMembersResponseValue) => onV1CampaignsMembersResponse(
                v1CampaignsMembersResponseValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V1CampaignsMembersResponse1)} holds no value.")
        };

    public void Match(Action<V1CampaignsMembersResponse> onV1CampaignsMembersResponse,
        Action<object> onAnonymousObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetV1CampaignsMembersResponse(out var v1CampaignsMembersResponseValue)) onV1CampaignsMembersResponse(
            v1CampaignsMembersResponseValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V1CampaignsMembersResponse1)} holds no value.");
    }
}

file sealed class V1CampaignsMembersResponse1Converter : JsonConverter<V1CampaignsMembersResponse1>
{
    public override V1CampaignsMembersResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V1CampaignsMembersResponse>(
            root,
            options,
            out var v1CampaignsMembersResponseValue))
        {
            return V1CampaignsMembersResponse1.V1CampaignsMembersResponse(v1CampaignsMembersResponseValue);
        }
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return V1CampaignsMembersResponse1.AnonymousObject(anonymousObjectValue);
        }
        return V1CampaignsMembersResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V1CampaignsMembersResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetV1CampaignsMembersResponse(out var v1CampaignsMembersResponseValue))
        {
            JsonSerializer.Serialize(writer, v1CampaignsMembersResponseValue, options);
        }
        else if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V1CampaignsMembersResponse1)} contains no valid value to serialize.");
        }
    }
}
