using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Lusha.Core.Extensions;
using Lusha.Core.Models;

namespace Lusha.Models.AnyOf;

[JsonConverter(typeof(ResultLushaWebhooksApiConverter))]
public record ResultLushaWebhooksApi
{
    private readonly Optional<CreateSubscriptionSuccessResult> _createSubscriptionSuccessResultValue;

    private readonly Optional<CreateSubscriptionErrorResult> _createSubscriptionErrorResultValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResultLushaWebhooksApi(Optional<CreateSubscriptionSuccessResult> createSubscriptionSuccessResultValue,
        Optional<CreateSubscriptionErrorResult> createSubscriptionErrorResultValue,
        Optional<UnknownArm> unknownValue)
    {
        _createSubscriptionSuccessResultValue = createSubscriptionSuccessResultValue;
        _createSubscriptionErrorResultValue = createSubscriptionErrorResultValue;
        _unknownValue = unknownValue;
    }

    public static ResultLushaWebhooksApi CreateSubscriptionSuccessResult(CreateSubscriptionSuccessResult value) =>
        new(Optional<CreateSubscriptionSuccessResult>.Some(value), default, default);

    public static ResultLushaWebhooksApi CreateSubscriptionErrorResult(CreateSubscriptionErrorResult value) =>
        new(default, Optional<CreateSubscriptionErrorResult>.Some(value), default);

    internal static ResultLushaWebhooksApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCreateSubscriptionSuccessResult([NotNullWhen(true)] out CreateSubscriptionSuccessResult? value) =>
        _createSubscriptionSuccessResultValue.TryGetValue(out value);

    public bool TryGetCreateSubscriptionErrorResult([NotNullWhen(true)] out CreateSubscriptionErrorResult? value) =>
        _createSubscriptionErrorResultValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResultLushaWebhooksApi(CreateSubscriptionSuccessResult value) =>
        CreateSubscriptionSuccessResult(value);

    public static implicit operator ResultLushaWebhooksApi(CreateSubscriptionErrorResult value) =>
        CreateSubscriptionErrorResult(value);

    public TResult Match<TResult>(Func<CreateSubscriptionSuccessResult, TResult> onCreateSubscriptionSuccessResult,
        Func<CreateSubscriptionErrorResult, TResult> onCreateSubscriptionErrorResult,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCreateSubscriptionSuccessResult(
                out var createSubscriptionSuccessResultValue) => onCreateSubscriptionSuccessResult(
                createSubscriptionSuccessResultValue),
            _ when TryGetCreateSubscriptionErrorResult(
                out var createSubscriptionErrorResultValue) => onCreateSubscriptionErrorResult(
                createSubscriptionErrorResultValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ResultLushaWebhooksApi)} holds no value.")
        };

    public void Match(Action<CreateSubscriptionSuccessResult> onCreateSubscriptionSuccessResult,
        Action<CreateSubscriptionErrorResult> onCreateSubscriptionErrorResult,
        Action<JsonElement> otherwise)
    {
        if (TryGetCreateSubscriptionSuccessResult(
            out var createSubscriptionSuccessResultValue)) onCreateSubscriptionSuccessResult(
            createSubscriptionSuccessResultValue);
        else if (TryGetCreateSubscriptionErrorResult(
            out var createSubscriptionErrorResultValue)) onCreateSubscriptionErrorResult(
            createSubscriptionErrorResultValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ResultLushaWebhooksApi)} holds no value.");
    }
}

file sealed class ResultLushaWebhooksApiConverter : JsonConverter<ResultLushaWebhooksApi>
{
    public override ResultLushaWebhooksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CreateSubscriptionSuccessResult>(
            root,
            options,
            out var createSubscriptionSuccessResultValue))
        {
            return ResultLushaWebhooksApi.CreateSubscriptionSuccessResult(createSubscriptionSuccessResultValue);
        }
        if (JsonSerializer.TryDeserialize<CreateSubscriptionErrorResult>(
            root,
            options,
            out var createSubscriptionErrorResultValue))
        {
            return ResultLushaWebhooksApi.CreateSubscriptionErrorResult(createSubscriptionErrorResultValue);
        }
        return ResultLushaWebhooksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ResultLushaWebhooksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetCreateSubscriptionSuccessResult(out var createSubscriptionSuccessResultValue))
        {
            JsonSerializer.Serialize(writer, createSubscriptionSuccessResultValue, options);
        }
        else if (value.TryGetCreateSubscriptionErrorResult(out var createSubscriptionErrorResultValue))
        {
            JsonSerializer.Serialize(writer, createSubscriptionErrorResultValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ResultLushaWebhooksApi)} contains no valid value to serialize.");
        }
    }
}
