using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(V1CampaignsMembersResponse11Converter))]
public record V1CampaignsMembersResponse11
{
    private readonly Optional<CampaignMemberResource> _campaignMemberResourceValue;

    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V1CampaignsMembersResponse11(Optional<CampaignMemberResource> campaignMemberResourceValue,
        Optional<object> anonymousObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _campaignMemberResourceValue = campaignMemberResourceValue;
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static V1CampaignsMembersResponse11 CampaignMemberResource(CampaignMemberResource value) =>
        new(Optional<CampaignMemberResource>.Some(value), default, default);

    public static V1CampaignsMembersResponse11 AnonymousObject(object value) =>
        new(default, Optional<object>.Some(value), default);

    internal static V1CampaignsMembersResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCampaignMemberResource([NotNullWhen(true)] out CampaignMemberResource? value) =>
        _campaignMemberResourceValue.TryGetValue(out value);

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V1CampaignsMembersResponse11(CampaignMemberResource value) =>
        CampaignMemberResource(value);

    public TResult Match<TResult>(Func<CampaignMemberResource, TResult> onCampaignMemberResource,
        Func<object, TResult> onAnonymousObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCampaignMemberResource(out var campaignMemberResourceValue) => onCampaignMemberResource(
                campaignMemberResourceValue),
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V1CampaignsMembersResponse11)} holds no value.")
        };

    public void Match(Action<CampaignMemberResource> onCampaignMemberResource,
        Action<object> onAnonymousObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetCampaignMemberResource(out var campaignMemberResourceValue)) onCampaignMemberResource(
            campaignMemberResourceValue);
        else if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V1CampaignsMembersResponse11)} holds no value.");
    }
}

file sealed class V1CampaignsMembersResponse11Converter : JsonConverter<V1CampaignsMembersResponse11>
{
    public override V1CampaignsMembersResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CampaignMemberResource>(root, options, out var campaignMemberResourceValue))
        {
            return V1CampaignsMembersResponse11.CampaignMemberResource(campaignMemberResourceValue);
        }
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return V1CampaignsMembersResponse11.AnonymousObject(anonymousObjectValue);
        }
        return V1CampaignsMembersResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V1CampaignsMembersResponse11 value, JsonSerializerOptions options)
    {
        if (value.TryGetCampaignMemberResource(out var campaignMemberResourceValue))
        {
            JsonSerializer.Serialize(writer, campaignMemberResourceValue, options);
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
            throw new JsonException($"{nameof(V1CampaignsMembersResponse11)} contains no valid value to serialize.");
        }
    }
}
