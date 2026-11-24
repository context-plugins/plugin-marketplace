using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;

namespace Hightouch.Models.AnyOf;

/// <summary>
/// A single send target. Provide either <c>handle</c> (inline delivery address) or
/// <c>id</c> (Personalization API profile ID), but not both.
/// </summary>
[JsonConverter(typeof(CampaignRecipientConverter))]
public record CampaignRecipient
{
    private readonly Optional<HandleCampaignRecipient> _handleCampaignRecipientValue;

    private readonly Optional<ProfileCampaignRecipient> _profileCampaignRecipientValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CampaignRecipient(Optional<HandleCampaignRecipient> handleCampaignRecipientValue,
        Optional<ProfileCampaignRecipient> profileCampaignRecipientValue,
        Optional<UnknownArm> unknownValue)
    {
        _handleCampaignRecipientValue = handleCampaignRecipientValue;
        _profileCampaignRecipientValue = profileCampaignRecipientValue;
        _unknownValue = unknownValue;
    }

    public static CampaignRecipient HandleCampaignRecipient(HandleCampaignRecipient value) =>
        new(Optional<HandleCampaignRecipient>.Some(value), default, default);

    public static CampaignRecipient ProfileCampaignRecipient(ProfileCampaignRecipient value) =>
        new(default, Optional<ProfileCampaignRecipient>.Some(value), default);

    internal static CampaignRecipient Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetHandleCampaignRecipient([NotNullWhen(true)] out HandleCampaignRecipient? value) =>
        _handleCampaignRecipientValue.TryGetValue(out value);

    public bool TryGetProfileCampaignRecipient([NotNullWhen(true)] out ProfileCampaignRecipient? value) =>
        _profileCampaignRecipientValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CampaignRecipient(HandleCampaignRecipient value) => HandleCampaignRecipient(value);

    public static implicit operator CampaignRecipient(ProfileCampaignRecipient value) =>
        ProfileCampaignRecipient(value);

    public TResult Match<TResult>(Func<HandleCampaignRecipient, TResult> onHandleCampaignRecipient,
        Func<ProfileCampaignRecipient, TResult> onProfileCampaignRecipient,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetHandleCampaignRecipient(out var handleCampaignRecipientValue) => onHandleCampaignRecipient(
                handleCampaignRecipientValue),
            _ when TryGetProfileCampaignRecipient(out var profileCampaignRecipientValue) => onProfileCampaignRecipient(
                profileCampaignRecipientValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CampaignRecipient)} holds no value.")
        };

    public void Match(Action<HandleCampaignRecipient> onHandleCampaignRecipient,
        Action<ProfileCampaignRecipient> onProfileCampaignRecipient,
        Action<JsonElement> otherwise)
    {
        if (TryGetHandleCampaignRecipient(out var handleCampaignRecipientValue)) onHandleCampaignRecipient(
            handleCampaignRecipientValue);
        else if (TryGetProfileCampaignRecipient(out var profileCampaignRecipientValue)) onProfileCampaignRecipient(
            profileCampaignRecipientValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CampaignRecipient)} holds no value.");
    }
}

file sealed class CampaignRecipientConverter : JsonConverter<CampaignRecipient>
{
    public override CampaignRecipient Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<HandleCampaignRecipient>(root, options, out var handleCampaignRecipientValue))
        {
            return CampaignRecipient.HandleCampaignRecipient(handleCampaignRecipientValue);
        }
        if (JsonSerializer.TryDeserialize<ProfileCampaignRecipient>(
            root,
            options,
            out var profileCampaignRecipientValue))
        {
            return CampaignRecipient.ProfileCampaignRecipient(profileCampaignRecipientValue);
        }
        return CampaignRecipient.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CampaignRecipient value, JsonSerializerOptions options)
    {
        if (value.TryGetHandleCampaignRecipient(out var handleCampaignRecipientValue))
        {
            JsonSerializer.Serialize(writer, handleCampaignRecipientValue, options);
        }
        else if (value.TryGetProfileCampaignRecipient(out var profileCampaignRecipientValue))
        {
            JsonSerializer.Serialize(writer, profileCampaignRecipientValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CampaignRecipient)} contains no valid value to serialize.");
        }
    }
}
