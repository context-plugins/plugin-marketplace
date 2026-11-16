using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(UsersRequestConverter))]
public record UsersRequest
{
    private readonly Optional<UpdateUser> _updateUserValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private UsersRequest(Optional<UpdateUser> updateUserValue, Optional<UnknownArm> unknownValue)
    {
        _updateUserValue = updateUserValue;
        _unknownValue = unknownValue;
    }

    public static UsersRequest UpdateUser(UpdateUser value) => new(Optional<UpdateUser>.Some(value), default);

    internal static UsersRequest Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUpdateUser([NotNullWhen(true)] out UpdateUser? value) => _updateUserValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator UsersRequest(UpdateUser value) => UpdateUser(value);

    public TResult Match<TResult>(Func<UpdateUser, TResult> onUpdateUser, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUpdateUser(out var updateUserValue) => onUpdateUser(updateUserValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(UsersRequest)} holds no value.")
        };

    public void Match(Action<UpdateUser> onUpdateUser, Action<JsonElement> otherwise)
    {
        if (TryGetUpdateUser(out var updateUserValue)) onUpdateUser(updateUserValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(UsersRequest)} holds no value.");
    }
}

file sealed class UsersRequestConverter : JsonConverter<UsersRequest>
{
    public override UsersRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UpdateUser>(root, options, out var updateUserValue))
        {
            return UsersRequest.UpdateUser(updateUserValue);
        }
        return UsersRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, UsersRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetUpdateUser(out var updateUserValue))
        {
            JsonSerializer.Serialize(writer, updateUserValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(UsersRequest)} contains no valid value to serialize.");
        }
    }
}
