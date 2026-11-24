using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Skribble.Core.Extensions;
using Skribble.Core.Models;

namespace Skribble.Models.AnyOf;

[JsonConverter(typeof(UserObserverConverter))]
public record UserObserver
{
    private readonly Optional<UserByEmail> _userByEmailValue;

    private readonly Optional<UserById> _userByIdValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private UserObserver(Optional<UserByEmail> userByEmailValue,
        Optional<UserById> userByIdValue,
        Optional<UnknownArm> unknownValue)
    {
        _userByEmailValue = userByEmailValue;
        _userByIdValue = userByIdValue;
        _unknownValue = unknownValue;
    }

    public static UserObserver UserByEmail(UserByEmail value) =>
        new(Optional<UserByEmail>.Some(value), default, default);

    public static UserObserver UserById(UserById value) => new(default, Optional<UserById>.Some(value), default);

    internal static UserObserver Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUserByEmail([NotNullWhen(true)] out UserByEmail? value) =>
        _userByEmailValue.TryGetValue(out value);

    public bool TryGetUserById([NotNullWhen(true)] out UserById? value) => _userByIdValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator UserObserver(UserByEmail value) => UserByEmail(value);

    public static implicit operator UserObserver(UserById value) => UserById(value);

    public TResult Match<TResult>(Func<UserByEmail, TResult> onUserByEmail,
        Func<UserById, TResult> onUserById,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUserByEmail(out var userByEmailValue) => onUserByEmail(userByEmailValue),
            _ when TryGetUserById(out var userByIdValue) => onUserById(userByIdValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(UserObserver)} holds no value.")
        };

    public void Match(Action<UserByEmail> onUserByEmail, Action<UserById> onUserById, Action<JsonElement> otherwise)
    {
        if (TryGetUserByEmail(out var userByEmailValue)) onUserByEmail(userByEmailValue);
        else if (TryGetUserById(out var userByIdValue)) onUserById(userByIdValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(UserObserver)} holds no value.");
    }
}

file sealed class UserObserverConverter : JsonConverter<UserObserver>
{
    public override UserObserver Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UserByEmail>(root, options, out var userByEmailValue))
        {
            return UserObserver.UserByEmail(userByEmailValue);
        }
        if (JsonSerializer.TryDeserialize<UserById>(root, options, out var userByIdValue))
        {
            return UserObserver.UserById(userByIdValue);
        }
        return UserObserver.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, UserObserver value, JsonSerializerOptions options)
    {
        if (value.TryGetUserByEmail(out var userByEmailValue))
        {
            JsonSerializer.Serialize(writer, userByEmailValue, options);
        }
        else if (value.TryGetUserById(out var userByIdValue))
        {
            JsonSerializer.Serialize(writer, userByIdValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(UserObserver)} contains no valid value to serialize.");
        }
    }
}
