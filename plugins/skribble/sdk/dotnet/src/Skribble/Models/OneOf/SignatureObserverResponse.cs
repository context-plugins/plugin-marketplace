using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models.OneOf;

/// <summary>
/// Response object representing an observer that has been added to a signature request.
/// <para>
/// Depending on the type, either user_info or group_info is present.
/// </para>
/// </summary>
[JsonConverter(typeof(SignatureObserverResponseConverter))]
public record SignatureObserverResponse
{
    private readonly Optional<UserObserverResponse> _userObserverResponseValue;

    private readonly Optional<GroupObserverResponse> _groupObserverResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SignatureObserverResponse(Optional<UserObserverResponse> userObserverResponseValue,
        Optional<GroupObserverResponse> groupObserverResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _userObserverResponseValue = userObserverResponseValue;
        _groupObserverResponseValue = groupObserverResponseValue;
        _unknownValue = unknownValue;
    }

    public static SignatureObserverResponse UserObserverResponse(UserObserverResponse value) =>
        new(Optional<UserObserverResponse>.Some(value), default, default);

    public static SignatureObserverResponse GroupObserverResponse(GroupObserverResponse value) =>
        new(default, Optional<GroupObserverResponse>.Some(value), default);

    internal static SignatureObserverResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUserObserverResponse([NotNullWhen(true)] out UserObserverResponse? value) =>
        _userObserverResponseValue.TryGetValue(out value);

    public bool TryGetGroupObserverResponse([NotNullWhen(true)] out GroupObserverResponse? value) =>
        _groupObserverResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SignatureObserverResponse(UserObserverResponse value) =>
        UserObserverResponse(value);

    public static implicit operator SignatureObserverResponse(GroupObserverResponse value) =>
        GroupObserverResponse(value);

    public TResult Match<TResult>(Func<UserObserverResponse, TResult> onUserObserverResponse,
        Func<GroupObserverResponse, TResult> onGroupObserverResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUserObserverResponse(out var userObserverResponseValue) => onUserObserverResponse(
                userObserverResponseValue),
            _ when TryGetGroupObserverResponse(out var groupObserverResponseValue) => onGroupObserverResponse(
                groupObserverResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SignatureObserverResponse)} holds no value.")
        };

    public void Match(Action<UserObserverResponse> onUserObserverResponse,
        Action<GroupObserverResponse> onGroupObserverResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetUserObserverResponse(out var userObserverResponseValue)) onUserObserverResponse(
            userObserverResponseValue);
        else if (TryGetGroupObserverResponse(out var groupObserverResponseValue)) onGroupObserverResponse(
            groupObserverResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SignatureObserverResponse)} holds no value.");
    }
}

file sealed class SignatureObserverResponseConverter : JsonConverter<SignatureObserverResponse>
{
    public override SignatureObserverResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (!root.TryGetProperty("type", out var typeProperty) || typeProperty.ValueKind != JsonValueKind.String)
        {
            throw new JsonException("Missing or non-string 'type' discriminator field");
        }
        return typeProperty.GetString() switch
        {
            "USER" => SignatureObserverResponse.UserObserverResponse(root.Deserialize<UserObserverResponse>(options)!),
            "GROUP" => SignatureObserverResponse.GroupObserverResponse(root.Deserialize<GroupObserverResponse>(
                options)!),
            _ => SignatureObserverResponse.Unknown(root)
        };
    }

    public override void Write(Utf8JsonWriter writer, SignatureObserverResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetUserObserverResponse(out var userObserverResponseValue))
        {
            JsonSerializer.Serialize(writer, userObserverResponseValue, options);
        }
        else if (value.TryGetGroupObserverResponse(out var groupObserverResponseValue))
        {
            JsonSerializer.Serialize(writer, groupObserverResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SignatureObserverResponse)} contains no valid value to serialize.");
        }
    }
}
