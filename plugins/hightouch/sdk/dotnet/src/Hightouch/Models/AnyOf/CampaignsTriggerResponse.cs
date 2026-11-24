using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

[JsonConverter(typeof(CampaignsTriggerResponseConverter))]
public record CampaignsTriggerResponse
{
    private readonly Optional<StartCampaignResponse> _startCampaignResponseValue;

    private readonly Optional<TriggerErrorResponse> _triggerErrorResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CampaignsTriggerResponse(Optional<StartCampaignResponse> startCampaignResponseValue,
        Optional<TriggerErrorResponse> triggerErrorResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _startCampaignResponseValue = startCampaignResponseValue;
        _triggerErrorResponseValue = triggerErrorResponseValue;
        _unknownValue = unknownValue;
    }

    public static CampaignsTriggerResponse StartCampaignResponse(StartCampaignResponse value) =>
        new(Optional<StartCampaignResponse>.Some(value), default, default);

    public static CampaignsTriggerResponse TriggerErrorResponse(TriggerErrorResponse value) =>
        new(default, Optional<TriggerErrorResponse>.Some(value), default);

    internal static CampaignsTriggerResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetStartCampaignResponse([NotNullWhen(true)] out StartCampaignResponse? value) =>
        _startCampaignResponseValue.TryGetValue(out value);

    public bool TryGetTriggerErrorResponse([NotNullWhen(true)] out TriggerErrorResponse? value) =>
        _triggerErrorResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CampaignsTriggerResponse(StartCampaignResponse value) =>
        StartCampaignResponse(value);

    public static implicit operator CampaignsTriggerResponse(TriggerErrorResponse value) => TriggerErrorResponse(value);

    public TResult Match<TResult>(Func<StartCampaignResponse, TResult> onStartCampaignResponse,
        Func<TriggerErrorResponse, TResult> onTriggerErrorResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetStartCampaignResponse(out var startCampaignResponseValue) => onStartCampaignResponse(
                startCampaignResponseValue),
            _ when TryGetTriggerErrorResponse(out var triggerErrorResponseValue) => onTriggerErrorResponse(
                triggerErrorResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CampaignsTriggerResponse)} holds no value.")
        };

    public void Match(Action<StartCampaignResponse> onStartCampaignResponse,
        Action<TriggerErrorResponse> onTriggerErrorResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetStartCampaignResponse(out var startCampaignResponseValue)) onStartCampaignResponse(
            startCampaignResponseValue);
        else if (TryGetTriggerErrorResponse(out var triggerErrorResponseValue)) onTriggerErrorResponse(
            triggerErrorResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CampaignsTriggerResponse)} holds no value.");
    }
}

file sealed class CampaignsTriggerResponseConverter : JsonConverter<CampaignsTriggerResponse>
{
    public override CampaignsTriggerResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<StartCampaignResponse>(root, options, out var startCampaignResponseValue))
        {
            return CampaignsTriggerResponse.StartCampaignResponse(startCampaignResponseValue);
        }
        if (JsonSerializer.TryDeserialize<TriggerErrorResponse>(root, options, out var triggerErrorResponseValue))
        {
            return CampaignsTriggerResponse.TriggerErrorResponse(triggerErrorResponseValue);
        }
        return CampaignsTriggerResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CampaignsTriggerResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetStartCampaignResponse(out var startCampaignResponseValue))
        {
            JsonSerializer.Serialize(writer, startCampaignResponseValue, options);
        }
        else if (value.TryGetTriggerErrorResponse(out var triggerErrorResponseValue))
        {
            JsonSerializer.Serialize(writer, triggerErrorResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CampaignsTriggerResponse)} contains no valid value to serialize.");
        }
    }
}
