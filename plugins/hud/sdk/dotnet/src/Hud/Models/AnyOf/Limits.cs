using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(LimitsConverter))]
public record Limits
{
    private readonly Optional<SubmittedRuntimeLimits> _submittedRuntimeLimitsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Limits(Optional<SubmittedRuntimeLimits> submittedRuntimeLimitsValue, Optional<UnknownArm> unknownValue)
    {
        _submittedRuntimeLimitsValue = submittedRuntimeLimitsValue;
        _unknownValue = unknownValue;
    }

    public static Limits SubmittedRuntimeLimits(SubmittedRuntimeLimits value) =>
        new(Optional<SubmittedRuntimeLimits>.Some(value), default);

    internal static Limits Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedRuntimeLimits([NotNullWhen(true)] out SubmittedRuntimeLimits? value) =>
        _submittedRuntimeLimitsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Limits(SubmittedRuntimeLimits value) => SubmittedRuntimeLimits(value);

    public TResult Match<TResult>(Func<SubmittedRuntimeLimits, TResult> onSubmittedRuntimeLimits,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedRuntimeLimits(out var submittedRuntimeLimitsValue) => onSubmittedRuntimeLimits(
                submittedRuntimeLimitsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Limits)} holds no value.")
        };

    public void Match(Action<SubmittedRuntimeLimits> onSubmittedRuntimeLimits, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedRuntimeLimits(out var submittedRuntimeLimitsValue)) onSubmittedRuntimeLimits(
            submittedRuntimeLimitsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Limits)} holds no value.");
    }
}

file sealed class LimitsConverter : JsonConverter<Limits>
{
    public override Limits Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedRuntimeLimits>(root, options, out var submittedRuntimeLimitsValue))
        {
            return Limits.SubmittedRuntimeLimits(submittedRuntimeLimitsValue);
        }
        return Limits.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Limits value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedRuntimeLimits(out var submittedRuntimeLimitsValue))
        {
            JsonSerializer.Serialize(writer, submittedRuntimeLimitsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Limits)} contains no valid value to serialize.");
        }
    }
}
