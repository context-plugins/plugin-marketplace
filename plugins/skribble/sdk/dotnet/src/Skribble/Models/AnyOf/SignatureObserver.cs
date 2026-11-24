using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Skribble.Core.Extensions;
using Skribble.Core.Models;

namespace Skribble.Models.AnyOf;

/// <summary>
/// Defines an observer target which can either be a USER or a GROUP.
/// <list type="bullet">
///   <item><description>For type USER, either email or user_id must be provided (but not both). When using email, a user will be automatically created if not present and returned.</description></item>
///   <item><description>For type GROUP, group_id must be provided and no user fields are allowed.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(SignatureObserverConverter))]
public record SignatureObserver
{
    private readonly Optional<UserObserver> _userObserverValue;

    private readonly Optional<GroupObserver> _groupObserverValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private SignatureObserver(Optional<UserObserver> userObserverValue,
        Optional<GroupObserver> groupObserverValue,
        Optional<UnknownArm> unknownValue)
    {
        _userObserverValue = userObserverValue;
        _groupObserverValue = groupObserverValue;
        _unknownValue = unknownValue;
    }

    public static SignatureObserver UserObserver(UserObserver value) =>
        new(Optional<UserObserver>.Some(value), default, default);

    public static SignatureObserver GroupObserver(GroupObserver value) =>
        new(default, Optional<GroupObserver>.Some(value), default);

    internal static SignatureObserver Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUserObserver([NotNullWhen(true)] out UserObserver? value) =>
        _userObserverValue.TryGetValue(out value);

    public bool TryGetGroupObserver([NotNullWhen(true)] out GroupObserver? value) =>
        _groupObserverValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator SignatureObserver(UserObserver value) => UserObserver(value);

    public static implicit operator SignatureObserver(GroupObserver value) => GroupObserver(value);

    public TResult Match<TResult>(Func<UserObserver, TResult> onUserObserver,
        Func<GroupObserver, TResult> onGroupObserver,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUserObserver(out var userObserverValue) => onUserObserver(userObserverValue),
            _ when TryGetGroupObserver(out var groupObserverValue) => onGroupObserver(groupObserverValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(SignatureObserver)} holds no value.")
        };

    public void Match(Action<UserObserver> onUserObserver,
        Action<GroupObserver> onGroupObserver,
        Action<JsonElement> otherwise)
    {
        if (TryGetUserObserver(out var userObserverValue)) onUserObserver(userObserverValue);
        else if (TryGetGroupObserver(out var groupObserverValue)) onGroupObserver(groupObserverValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(SignatureObserver)} holds no value.");
    }
}

file sealed class SignatureObserverConverter : JsonConverter<SignatureObserver>
{
    public override SignatureObserver Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UserObserver>(root, options, out var userObserverValue))
        {
            return SignatureObserver.UserObserver(userObserverValue);
        }
        if (JsonSerializer.TryDeserialize<GroupObserver>(root, options, out var groupObserverValue))
        {
            return SignatureObserver.GroupObserver(groupObserverValue);
        }
        return SignatureObserver.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, SignatureObserver value, JsonSerializerOptions options)
    {
        if (value.TryGetUserObserver(out var userObserverValue))
        {
            JsonSerializer.Serialize(writer, userObserverValue, options);
        }
        else if (value.TryGetGroupObserver(out var groupObserverValue))
        {
            JsonSerializer.Serialize(writer, groupObserverValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(SignatureObserver)} contains no valid value to serialize.");
        }
    }
}
