using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DevCycle.Core.Extensions;
using DevCycle.Core.Models;

namespace DevCycle.Models.AnyOf;

[JsonConverter(typeof(FilterDevCycleManagementDeprecatedFeaturesV1ApiConverter))]
public record FilterDevCycleManagementDeprecatedFeaturesV1Api
{
    private readonly Optional<AllFilter> _allFilterValue;

    private readonly Optional<UserFilter> _userFilterValue;

    private readonly Optional<UserCountryFilter> _userCountryFilterValue;

    private readonly Optional<UserAppVersionFilter> _userAppVersionFilterValue;

    private readonly Optional<UserPlatformVersionFilter> _userPlatformVersionFilterValue;

    private readonly Optional<UserCustomFilter> _userCustomFilterValue;

    private readonly Optional<AudienceMatchFilter> _audienceMatchFilterValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FilterDevCycleManagementDeprecatedFeaturesV1Api(Optional<AllFilter> allFilterValue,
        Optional<UserFilter> userFilterValue,
        Optional<UserCountryFilter> userCountryFilterValue,
        Optional<UserAppVersionFilter> userAppVersionFilterValue,
        Optional<UserPlatformVersionFilter> userPlatformVersionFilterValue,
        Optional<UserCustomFilter> userCustomFilterValue,
        Optional<AudienceMatchFilter> audienceMatchFilterValue,
        Optional<UnknownArm> unknownValue)
    {
        _allFilterValue = allFilterValue;
        _userFilterValue = userFilterValue;
        _userCountryFilterValue = userCountryFilterValue;
        _userAppVersionFilterValue = userAppVersionFilterValue;
        _userPlatformVersionFilterValue = userPlatformVersionFilterValue;
        _userCustomFilterValue = userCustomFilterValue;
        _audienceMatchFilterValue = audienceMatchFilterValue;
        _unknownValue = unknownValue;
    }

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api AllFilter(AllFilter value) =>
        new(Optional<AllFilter>.Some(value), default, default, default, default, default, default, default);

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api UserFilter(UserFilter value) =>
        new(default, Optional<UserFilter>.Some(value), default, default, default, default, default, default);

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api UserCountryFilter(UserCountryFilter value) =>
        new(default, default, Optional<UserCountryFilter>.Some(value), default, default, default, default, default);

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api UserAppVersionFilter(UserAppVersionFilter value) =>
        new(default, default, default, Optional<UserAppVersionFilter>.Some(value), default, default, default, default);

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api UserPlatformVersionFilter(UserPlatformVersionFilter value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<UserPlatformVersionFilter>.Some(value),
            default,
            default,
            default);

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api UserCustomFilter(UserCustomFilter value) =>
        new(default, default, default, default, default, Optional<UserCustomFilter>.Some(value), default, default);

    public static FilterDevCycleManagementDeprecatedFeaturesV1Api AudienceMatchFilter(AudienceMatchFilter value) =>
        new(default, default, default, default, default, default, Optional<AudienceMatchFilter>.Some(value), default);

    internal static FilterDevCycleManagementDeprecatedFeaturesV1Api Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAllFilter([NotNullWhen(true)] out AllFilter? value) => _allFilterValue.TryGetValue(out value);

    public bool TryGetUserFilter([NotNullWhen(true)] out UserFilter? value) => _userFilterValue.TryGetValue(out value);

    public bool TryGetUserCountryFilter([NotNullWhen(true)] out UserCountryFilter? value) =>
        _userCountryFilterValue.TryGetValue(out value);

    public bool TryGetUserAppVersionFilter([NotNullWhen(true)] out UserAppVersionFilter? value) =>
        _userAppVersionFilterValue.TryGetValue(out value);

    public bool TryGetUserPlatformVersionFilter([NotNullWhen(true)] out UserPlatformVersionFilter? value) =>
        _userPlatformVersionFilterValue.TryGetValue(out value);

    public bool TryGetUserCustomFilter([NotNullWhen(true)] out UserCustomFilter? value) =>
        _userCustomFilterValue.TryGetValue(out value);

    public bool TryGetAudienceMatchFilter([NotNullWhen(true)] out AudienceMatchFilter? value) =>
        _audienceMatchFilterValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(AllFilter value) =>
        AllFilter(value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(UserFilter value) =>
        UserFilter(value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(UserCountryFilter value) =>
        UserCountryFilter(value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(UserAppVersionFilter value) =>
        UserAppVersionFilter(value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(UserPlatformVersionFilter value) =>
        UserPlatformVersionFilter(value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(UserCustomFilter value) =>
        UserCustomFilter(value);

    public static implicit operator FilterDevCycleManagementDeprecatedFeaturesV1Api(AudienceMatchFilter value) =>
        AudienceMatchFilter(value);

    public TResult Match<TResult>(Func<AllFilter, TResult> onAllFilter,
        Func<UserFilter, TResult> onUserFilter,
        Func<UserCountryFilter, TResult> onUserCountryFilter,
        Func<UserAppVersionFilter, TResult> onUserAppVersionFilter,
        Func<UserPlatformVersionFilter, TResult> onUserPlatformVersionFilter,
        Func<UserCustomFilter, TResult> onUserCustomFilter,
        Func<AudienceMatchFilter, TResult> onAudienceMatchFilter,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAllFilter(out var allFilterValue) => onAllFilter(allFilterValue),
            _ when TryGetUserFilter(out var userFilterValue) => onUserFilter(userFilterValue),
            _ when TryGetUserCountryFilter(out var userCountryFilterValue) => onUserCountryFilter(
                userCountryFilterValue),
            _ when TryGetUserAppVersionFilter(out var userAppVersionFilterValue) => onUserAppVersionFilter(
                userAppVersionFilterValue),
            _ when TryGetUserPlatformVersionFilter(
                out var userPlatformVersionFilterValue) => onUserPlatformVersionFilter(userPlatformVersionFilterValue),
            _ when TryGetUserCustomFilter(out var userCustomFilterValue) => onUserCustomFilter(userCustomFilterValue),
            _ when TryGetAudienceMatchFilter(out var audienceMatchFilterValue) => onAudienceMatchFilter(
                audienceMatchFilterValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException(
                $"{nameof(FilterDevCycleManagementDeprecatedFeaturesV1Api)} holds no value.")
        };

    public void Match(Action<AllFilter> onAllFilter,
        Action<UserFilter> onUserFilter,
        Action<UserCountryFilter> onUserCountryFilter,
        Action<UserAppVersionFilter> onUserAppVersionFilter,
        Action<UserPlatformVersionFilter> onUserPlatformVersionFilter,
        Action<UserCustomFilter> onUserCustomFilter,
        Action<AudienceMatchFilter> onAudienceMatchFilter,
        Action<JsonElement> otherwise)
    {
        if (TryGetAllFilter(out var allFilterValue)) onAllFilter(allFilterValue);
        else if (TryGetUserFilter(out var userFilterValue)) onUserFilter(userFilterValue);
        else if (TryGetUserCountryFilter(out var userCountryFilterValue)) onUserCountryFilter(userCountryFilterValue);
        else if (TryGetUserAppVersionFilter(out var userAppVersionFilterValue)) onUserAppVersionFilter(
            userAppVersionFilterValue);
        else if (TryGetUserPlatformVersionFilter(out var userPlatformVersionFilterValue)) onUserPlatformVersionFilter(
            userPlatformVersionFilterValue);
        else if (TryGetUserCustomFilter(out var userCustomFilterValue)) onUserCustomFilter(userCustomFilterValue);
        else if (TryGetAudienceMatchFilter(out var audienceMatchFilterValue)) onAudienceMatchFilter(
            audienceMatchFilterValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException(
            $"{nameof(FilterDevCycleManagementDeprecatedFeaturesV1Api)} holds no value.");
    }
}

file sealed class FilterDevCycleManagementDeprecatedFeaturesV1ApiConverter : JsonConverter<FilterDevCycleManagementDeprecatedFeaturesV1Api>
{
    public override FilterDevCycleManagementDeprecatedFeaturesV1Api Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AllFilter>(root, options, out var allFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.AllFilter(allFilterValue);
        }
        if (JsonSerializer.TryDeserialize<UserFilter>(root, options, out var userFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.UserFilter(userFilterValue);
        }
        if (JsonSerializer.TryDeserialize<UserCountryFilter>(root, options, out var userCountryFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.UserCountryFilter(userCountryFilterValue);
        }
        if (JsonSerializer.TryDeserialize<UserAppVersionFilter>(root, options, out var userAppVersionFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.UserAppVersionFilter(userAppVersionFilterValue);
        }
        if (JsonSerializer.TryDeserialize<UserPlatformVersionFilter>(
            root,
            options,
            out var userPlatformVersionFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.UserPlatformVersionFilter(
                userPlatformVersionFilterValue);
        }
        if (JsonSerializer.TryDeserialize<UserCustomFilter>(root, options, out var userCustomFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.UserCustomFilter(userCustomFilterValue);
        }
        if (JsonSerializer.TryDeserialize<AudienceMatchFilter>(root, options, out var audienceMatchFilterValue))
        {
            return FilterDevCycleManagementDeprecatedFeaturesV1Api.AudienceMatchFilter(audienceMatchFilterValue);
        }
        return FilterDevCycleManagementDeprecatedFeaturesV1Api.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        FilterDevCycleManagementDeprecatedFeaturesV1Api value,
        JsonSerializerOptions options)
    {
        if (value.TryGetAllFilter(out var allFilterValue))
        {
            JsonSerializer.Serialize(writer, allFilterValue, options);
        }
        else if (value.TryGetUserFilter(out var userFilterValue))
        {
            JsonSerializer.Serialize(writer, userFilterValue, options);
        }
        else if (value.TryGetUserCountryFilter(out var userCountryFilterValue))
        {
            JsonSerializer.Serialize(writer, userCountryFilterValue, options);
        }
        else if (value.TryGetUserAppVersionFilter(out var userAppVersionFilterValue))
        {
            JsonSerializer.Serialize(writer, userAppVersionFilterValue, options);
        }
        else if (value.TryGetUserPlatformVersionFilter(out var userPlatformVersionFilterValue))
        {
            JsonSerializer.Serialize(writer, userPlatformVersionFilterValue, options);
        }
        else if (value.TryGetUserCustomFilter(out var userCustomFilterValue))
        {
            JsonSerializer.Serialize(writer, userCustomFilterValue, options);
        }
        else if (value.TryGetAudienceMatchFilter(out var audienceMatchFilterValue))
        {
            JsonSerializer.Serialize(writer, audienceMatchFilterValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(FilterDevCycleManagementDeprecatedFeaturesV1Api)} contains no valid value to serialize.");
        }
    }
}
