using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Credentials this run may use without ever seeing them. The agent can ask the server to type a binding by alias on one of its allowed domains; it cannot read the value. Bindings are not persisted past the run.
/// </summary>
[JsonConverter(typeof(SecretbindingsConverter))]
public record Secretbindings
{
    private readonly Optional<IReadOnlyList<SecretBinding>> _listOfSecretBindingValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Secretbindings(Optional<IReadOnlyList<SecretBinding>> listOfSecretBindingValue,
        Optional<UnknownArm> unknownValue)
    {
        _listOfSecretBindingValue = listOfSecretBindingValue;
        _unknownValue = unknownValue;
    }

    public static Secretbindings ListOfSecretBinding(IReadOnlyList<SecretBinding> value) =>
        new(Optional<IReadOnlyList<SecretBinding>>.Some(value), default);

    internal static Secretbindings Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfSecretBinding([NotNullWhen(true)] out IReadOnlyList<SecretBinding>? value) =>
        _listOfSecretBindingValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<SecretBinding>, TResult> onListOfSecretBinding,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfSecretBinding(out var listOfSecretBindingValue) => onListOfSecretBinding(
                listOfSecretBindingValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Secretbindings)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<SecretBinding>> onListOfSecretBinding, Action<JsonElement> otherwise)
    {
        if (TryGetListOfSecretBinding(out var listOfSecretBindingValue)) onListOfSecretBinding(
            listOfSecretBindingValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Secretbindings)} holds no value.");
    }
}

file sealed class SecretbindingsConverter : JsonConverter<Secretbindings>
{
    public override Secretbindings Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<SecretBinding>>(
            root,
            options,
            out var listOfSecretBindingValue))
        {
            return Secretbindings.ListOfSecretBinding(listOfSecretBindingValue);
        }
        return Secretbindings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Secretbindings value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfSecretBinding(out var listOfSecretBindingValue))
        {
            JsonSerializer.Serialize(writer, listOfSecretBindingValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Secretbindings)} contains no valid value to serialize.");
        }
    }
}
