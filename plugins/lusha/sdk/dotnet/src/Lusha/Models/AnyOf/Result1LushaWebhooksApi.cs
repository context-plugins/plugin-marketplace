using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Lusha.Core.Extensions;
using Lusha.Core.Models;

namespace Lusha.Models.AnyOf;

[JsonConverter(typeof(Result1LushaWebhooksApiConverter))]
public record Result1LushaWebhooksApi
{
    private readonly Optional<DeleteSubscriptionSuccessResult> _deleteSubscriptionSuccessResultValue;

    private readonly Optional<DeleteSubscriptionErrorResult> _deleteSubscriptionErrorResultValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Result1LushaWebhooksApi(Optional<DeleteSubscriptionSuccessResult> deleteSubscriptionSuccessResultValue,
        Optional<DeleteSubscriptionErrorResult> deleteSubscriptionErrorResultValue,
        Optional<UnknownArm> unknownValue)
    {
        _deleteSubscriptionSuccessResultValue = deleteSubscriptionSuccessResultValue;
        _deleteSubscriptionErrorResultValue = deleteSubscriptionErrorResultValue;
        _unknownValue = unknownValue;
    }

    public static Result1LushaWebhooksApi DeleteSubscriptionSuccessResult(DeleteSubscriptionSuccessResult value) =>
        new(Optional<DeleteSubscriptionSuccessResult>.Some(value), default, default);

    public static Result1LushaWebhooksApi DeleteSubscriptionErrorResult(DeleteSubscriptionErrorResult value) =>
        new(default, Optional<DeleteSubscriptionErrorResult>.Some(value), default);

    internal static Result1LushaWebhooksApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDeleteSubscriptionSuccessResult([NotNullWhen(true)] out DeleteSubscriptionSuccessResult? value) =>
        _deleteSubscriptionSuccessResultValue.TryGetValue(out value);

    public bool TryGetDeleteSubscriptionErrorResult([NotNullWhen(true)] out DeleteSubscriptionErrorResult? value) =>
        _deleteSubscriptionErrorResultValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Result1LushaWebhooksApi(DeleteSubscriptionSuccessResult value) =>
        DeleteSubscriptionSuccessResult(value);

    public static implicit operator Result1LushaWebhooksApi(DeleteSubscriptionErrorResult value) =>
        DeleteSubscriptionErrorResult(value);

    public TResult Match<TResult>(Func<DeleteSubscriptionSuccessResult, TResult> onDeleteSubscriptionSuccessResult,
        Func<DeleteSubscriptionErrorResult, TResult> onDeleteSubscriptionErrorResult,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDeleteSubscriptionSuccessResult(
                out var deleteSubscriptionSuccessResultValue) => onDeleteSubscriptionSuccessResult(
                deleteSubscriptionSuccessResultValue),
            _ when TryGetDeleteSubscriptionErrorResult(
                out var deleteSubscriptionErrorResultValue) => onDeleteSubscriptionErrorResult(
                deleteSubscriptionErrorResultValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Result1LushaWebhooksApi)} holds no value.")
        };

    public void Match(Action<DeleteSubscriptionSuccessResult> onDeleteSubscriptionSuccessResult,
        Action<DeleteSubscriptionErrorResult> onDeleteSubscriptionErrorResult,
        Action<JsonElement> otherwise)
    {
        if (TryGetDeleteSubscriptionSuccessResult(
            out var deleteSubscriptionSuccessResultValue)) onDeleteSubscriptionSuccessResult(
            deleteSubscriptionSuccessResultValue);
        else if (TryGetDeleteSubscriptionErrorResult(
            out var deleteSubscriptionErrorResultValue)) onDeleteSubscriptionErrorResult(
            deleteSubscriptionErrorResultValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Result1LushaWebhooksApi)} holds no value.");
    }
}

file sealed class Result1LushaWebhooksApiConverter : JsonConverter<Result1LushaWebhooksApi>
{
    public override Result1LushaWebhooksApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DeleteSubscriptionSuccessResult>(
            root,
            options,
            out var deleteSubscriptionSuccessResultValue))
        {
            return Result1LushaWebhooksApi.DeleteSubscriptionSuccessResult(deleteSubscriptionSuccessResultValue);
        }
        if (JsonSerializer.TryDeserialize<DeleteSubscriptionErrorResult>(
            root,
            options,
            out var deleteSubscriptionErrorResultValue))
        {
            return Result1LushaWebhooksApi.DeleteSubscriptionErrorResult(deleteSubscriptionErrorResultValue);
        }
        return Result1LushaWebhooksApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Result1LushaWebhooksApi value, JsonSerializerOptions options)
    {
        if (value.TryGetDeleteSubscriptionSuccessResult(out var deleteSubscriptionSuccessResultValue))
        {
            JsonSerializer.Serialize(writer, deleteSubscriptionSuccessResultValue, options);
        }
        else if (value.TryGetDeleteSubscriptionErrorResult(out var deleteSubscriptionErrorResultValue))
        {
            JsonSerializer.Serialize(writer, deleteSubscriptionErrorResultValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Result1LushaWebhooksApi)} contains no valid value to serialize.");
        }
    }
}
