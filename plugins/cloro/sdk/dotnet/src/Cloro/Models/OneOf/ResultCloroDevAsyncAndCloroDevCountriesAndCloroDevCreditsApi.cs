using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models.OneOf;

[JsonConverter(typeof(ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiConverter))]
public record ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi
{
    private readonly Optional<BatchTaskSuccessResult> _batchTaskSuccessResultValue;

    private readonly Optional<BatchTaskFailureResult> _batchTaskFailureResultValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi(Optional<BatchTaskSuccessResult> batchTaskSuccessResultValue,
        Optional<BatchTaskFailureResult> batchTaskFailureResultValue,
        Optional<UnknownArm> unknownValue)
    {
        _batchTaskSuccessResultValue = batchTaskSuccessResultValue;
        _batchTaskFailureResultValue = batchTaskFailureResultValue;
        _unknownValue = unknownValue;
    }

    public static ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi BatchTaskSuccessResult(BatchTaskSuccessResult value) =>
        new(Optional<BatchTaskSuccessResult>.Some(value), default, default);

    public static ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi BatchTaskFailureResult(BatchTaskFailureResult value) =>
        new(default, Optional<BatchTaskFailureResult>.Some(value), default);

    internal static ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBatchTaskSuccessResult([NotNullWhen(true)] out BatchTaskSuccessResult? value) =>
        _batchTaskSuccessResultValue.TryGetValue(out value);

    public bool TryGetBatchTaskFailureResult([NotNullWhen(true)] out BatchTaskFailureResult? value) =>
        _batchTaskFailureResultValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi(BatchTaskSuccessResult value) =>
        BatchTaskSuccessResult(value);

    public static implicit operator ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi(BatchTaskFailureResult value) =>
        BatchTaskFailureResult(value);

    public TResult Match<TResult>(Func<BatchTaskSuccessResult, TResult> onBatchTaskSuccessResult,
        Func<BatchTaskFailureResult, TResult> onBatchTaskFailureResult,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBatchTaskSuccessResult(out var batchTaskSuccessResultValue) => onBatchTaskSuccessResult(
                batchTaskSuccessResultValue),
            _ when TryGetBatchTaskFailureResult(out var batchTaskFailureResultValue) => onBatchTaskFailureResult(
                batchTaskFailureResultValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi)} holds no value.")
        };

    public void Match(Action<BatchTaskSuccessResult> onBatchTaskSuccessResult,
        Action<BatchTaskFailureResult> onBatchTaskFailureResult,
        Action<JsonElement> otherwise)
    {
        if (TryGetBatchTaskSuccessResult(out var batchTaskSuccessResultValue)) onBatchTaskSuccessResult(
            batchTaskSuccessResultValue);
        else if (TryGetBatchTaskFailureResult(out var batchTaskFailureResultValue)) onBatchTaskFailureResult(
            batchTaskFailureResultValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi)} holds no value.");
    }
}

file sealed class ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApiConverter : JsonConverter<ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi>
{
    public override ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("success", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'success' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "true" => ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi.BatchTaskSuccessResult(
                root.Deserialize<BatchTaskSuccessResult>(options)!),
            "false" => ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi.BatchTaskFailureResult(
                root.Deserialize<BatchTaskFailureResult>(options)!),
            _ => ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer,
        ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetBatchTaskSuccessResult(out var batchTaskSuccessResultValue))
        {
            JsonSerializer.Serialize(writer, batchTaskSuccessResultValue, options);
        }
        else if (value.TryGetBatchTaskFailureResult(out var batchTaskFailureResultValue))
        {
            JsonSerializer.Serialize(writer, batchTaskFailureResultValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ResultCloroDevAsyncAndCloroDevCountriesAndCloroDevCreditsApi)} contains no valid value to serialize.");
        }
    }
}
