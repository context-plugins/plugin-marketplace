using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(Role2Converter))]
public record Role2
{
    private readonly Optional<Role> _roleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Role2(Optional<Role> roleValue, Optional<UnknownArm> unknownValue)
    {
        _roleValue = roleValue;
        _unknownValue = unknownValue;
    }

    public static Role2 Role(Role value) => new(Optional<Role>.Some(value), default);

    internal static Role2 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRole([NotNullWhen(true)] out Role? value) => _roleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Role2(Role value) => Role(value);

    public TResult Match<TResult>(Func<Role, TResult> onRole, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRole(out var roleValue) => onRole(roleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Role2)} holds no value.")
        };

    public void Match(Action<Role> onRole, Action<JsonElement> otherwise)
    {
        if (TryGetRole(out var roleValue)) onRole(roleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Role2)} holds no value.");
    }
}

file sealed class Role2Converter : JsonConverter<Role2>
{
    public override Role2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Role>(root, options, out var roleValue))
        {
            return Role2.Role(roleValue);
        }
        return Role2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Role2 value, JsonSerializerOptions options)
    {
        if (value.TryGetRole(out var roleValue))
        {
            JsonSerializer.Serialize(writer, roleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Role2)} contains no valid value to serialize.");
        }
    }
}
