using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(VerifierConverter))]
public record Verifier
{
    private readonly Optional<SubmittedVerifierTask> _submittedVerifierTaskValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Verifier(Optional<SubmittedVerifierTask> submittedVerifierTaskValue, Optional<UnknownArm> unknownValue)
    {
        _submittedVerifierTaskValue = submittedVerifierTaskValue;
        _unknownValue = unknownValue;
    }

    public static Verifier SubmittedVerifierTask(SubmittedVerifierTask value) =>
        new(Optional<SubmittedVerifierTask>.Some(value), default);

    internal static Verifier Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedVerifierTask([NotNullWhen(true)] out SubmittedVerifierTask? value) =>
        _submittedVerifierTaskValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Verifier(SubmittedVerifierTask value) => SubmittedVerifierTask(value);

    public TResult Match<TResult>(Func<SubmittedVerifierTask, TResult> onSubmittedVerifierTask,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedVerifierTask(out var submittedVerifierTaskValue) => onSubmittedVerifierTask(
                submittedVerifierTaskValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Verifier)} holds no value.")
        };

    public void Match(Action<SubmittedVerifierTask> onSubmittedVerifierTask, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedVerifierTask(out var submittedVerifierTaskValue)) onSubmittedVerifierTask(
            submittedVerifierTaskValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Verifier)} holds no value.");
    }
}

file sealed class VerifierConverter : JsonConverter<Verifier>
{
    public override Verifier Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedVerifierTask>(root, options, out var submittedVerifierTaskValue))
        {
            return Verifier.SubmittedVerifierTask(submittedVerifierTaskValue);
        }
        return Verifier.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Verifier value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedVerifierTask(out var submittedVerifierTaskValue))
        {
            JsonSerializer.Serialize(writer, submittedVerifierTaskValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Verifier)} contains no valid value to serialize.");
        }
    }
}
