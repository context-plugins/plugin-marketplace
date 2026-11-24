using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(DetailConverter))]
public record Detail
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<ApiKeySpendLimitDetail> _apiKeySpendLimitDetailValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Detail(Optional<string> stringValue,
        Optional<ApiKeySpendLimitDetail> apiKeySpendLimitDetailValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _apiKeySpendLimitDetailValue = apiKeySpendLimitDetailValue;
        _unknownValue = unknownValue;
    }

    public static Detail String(string value) => new(Optional<string>.Some(value), default, default);

    public static Detail ApiKeySpendLimitDetail(ApiKeySpendLimitDetail value) =>
        new(default, Optional<ApiKeySpendLimitDetail>.Some(value), default);

    internal static Detail Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetApiKeySpendLimitDetail([NotNullWhen(true)] out ApiKeySpendLimitDetail? value) =>
        _apiKeySpendLimitDetailValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Detail(string value) => String(value);

    public static implicit operator Detail(ApiKeySpendLimitDetail value) => ApiKeySpendLimitDetail(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<ApiKeySpendLimitDetail, TResult> onApiKeySpendLimitDetail,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetApiKeySpendLimitDetail(out var apiKeySpendLimitDetailValue) => onApiKeySpendLimitDetail(
                apiKeySpendLimitDetailValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Detail)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<ApiKeySpendLimitDetail> onApiKeySpendLimitDetail,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetApiKeySpendLimitDetail(out var apiKeySpendLimitDetailValue)) onApiKeySpendLimitDetail(
            apiKeySpendLimitDetailValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Detail)} holds no value.");
    }
}

file sealed class DetailConverter : JsonConverter<Detail>
{
    public override Detail Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Detail.String(value);
        }
        if (JsonSerializer.TryDeserialize<ApiKeySpendLimitDetail>(root, options, out var apiKeySpendLimitDetailValue))
        {
            return Detail.ApiKeySpendLimitDetail(apiKeySpendLimitDetailValue);
        }
        return Detail.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Detail value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetApiKeySpendLimitDetail(out var apiKeySpendLimitDetailValue))
        {
            JsonSerializer.Serialize(writer, apiKeySpendLimitDetailValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Detail)} contains no valid value to serialize.");
        }
    }
}
