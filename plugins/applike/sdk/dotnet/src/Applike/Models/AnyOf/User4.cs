using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Applike.Core.Extensions;
using Applike.Core.Models;

namespace Applike.Models.AnyOf;

[JsonConverter(typeof(User4Converter))]
public record User4
{
    private readonly Optional<User> _userValue;

    private readonly Optional<User1> _user1Value;

    private readonly Optional<User2> _user2Value;

    private readonly Optional<User3> _user3Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private User4(Optional<User> userValue,
        Optional<User1> user1Value,
        Optional<User2> user2Value,
        Optional<User3> user3Value,
        Optional<UnknownArm> unknownValue)
    {
        _userValue = userValue;
        _user1Value = user1Value;
        _user2Value = user2Value;
        _user3Value = user3Value;
        _unknownValue = unknownValue;
    }

    public static User4 User(User value) => new(Optional<User>.Some(value), default, default, default, default);

    public static User4 User1(User1 value) => new(default, Optional<User1>.Some(value), default, default, default);

    public static User4 User2(User2 value) => new(default, default, Optional<User2>.Some(value), default, default);

    public static User4 User3(User3 value) => new(default, default, default, Optional<User3>.Some(value), default);

    internal static User4 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUser([NotNullWhen(true)] out User? value) => _userValue.TryGetValue(out value);

    public bool TryGetUser1([NotNullWhen(true)] out User1? value) => _user1Value.TryGetValue(out value);

    public bool TryGetUser2([NotNullWhen(true)] out User2? value) => _user2Value.TryGetValue(out value);

    public bool TryGetUser3([NotNullWhen(true)] out User3? value) => _user3Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator User4(User value) => User(value);

    public static implicit operator User4(User1 value) => User1(value);

    public static implicit operator User4(User2 value) => User2(value);

    public static implicit operator User4(User3 value) => User3(value);

    public TResult Match<TResult>(Func<User, TResult> onUser,
        Func<User1, TResult> onUser1,
        Func<User2, TResult> onUser2,
        Func<User3, TResult> onUser3,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUser(out var userValue) => onUser(userValue),
            _ when TryGetUser1(out var user1Value) => onUser1(user1Value),
            _ when TryGetUser2(out var user2Value) => onUser2(user2Value),
            _ when TryGetUser3(out var user3Value) => onUser3(user3Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(User4)} holds no value.")
        };

    public void Match(Action<User> onUser,
        Action<User1> onUser1,
        Action<User2> onUser2,
        Action<User3> onUser3,
        Action<JsonElement> otherwise)
    {
        if (TryGetUser(out var userValue)) onUser(userValue);
        else if (TryGetUser1(out var user1Value)) onUser1(user1Value);
        else if (TryGetUser2(out var user2Value)) onUser2(user2Value);
        else if (TryGetUser3(out var user3Value)) onUser3(user3Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(User4)} holds no value.");
    }
}

file sealed class User4Converter : JsonConverter<User4>
{
    public override User4 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<User>(root, options, out var userValue))
        {
            return User4.User(userValue);
        }
        if (JsonSerializer.TryDeserialize<User1>(root, options, out var user1Value))
        {
            return User4.User1(user1Value);
        }
        if (JsonSerializer.TryDeserialize<User2>(root, options, out var user2Value))
        {
            return User4.User2(user2Value);
        }
        if (JsonSerializer.TryDeserialize<User3>(root, options, out var user3Value))
        {
            return User4.User3(user3Value);
        }
        return User4.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, User4 value, JsonSerializerOptions options)
    {
        if (value.TryGetUser(out var userValue))
        {
            JsonSerializer.Serialize(writer, userValue, options);
        }
        else if (value.TryGetUser1(out var user1Value))
        {
            JsonSerializer.Serialize(writer, user1Value, options);
        }
        else if (value.TryGetUser2(out var user2Value))
        {
            JsonSerializer.Serialize(writer, user2Value, options);
        }
        else if (value.TryGetUser3(out var user3Value))
        {
            JsonSerializer.Serialize(writer, user3Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(User4)} contains no valid value to serialize.");
        }
    }
}
