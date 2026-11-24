using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(RootConverter))]
public record Root
{
    private readonly Optional<SubmittedComposeProjectRef> _submittedComposeProjectRefValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Root(Optional<SubmittedComposeProjectRef> submittedComposeProjectRefValue,
        Optional<UnknownArm> unknownValue)
    {
        _submittedComposeProjectRefValue = submittedComposeProjectRefValue;
        _unknownValue = unknownValue;
    }

    public static Root SubmittedComposeProjectRef(SubmittedComposeProjectRef value) =>
        new(Optional<SubmittedComposeProjectRef>.Some(value), default);

    internal static Root Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedComposeProjectRef([NotNullWhen(true)] out SubmittedComposeProjectRef? value) =>
        _submittedComposeProjectRefValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Root(SubmittedComposeProjectRef value) => SubmittedComposeProjectRef(value);

    public TResult Match<TResult>(Func<SubmittedComposeProjectRef, TResult> onSubmittedComposeProjectRef,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedComposeProjectRef(
                out var submittedComposeProjectRefValue) => onSubmittedComposeProjectRef(
                submittedComposeProjectRefValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Root)} holds no value.")
        };

    public void Match(Action<SubmittedComposeProjectRef> onSubmittedComposeProjectRef, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedComposeProjectRef(out var submittedComposeProjectRefValue)) onSubmittedComposeProjectRef(
            submittedComposeProjectRefValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Root)} holds no value.");
    }
}

file sealed class RootConverter : JsonConverter<Root>
{
    public override Root Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedComposeProjectRef>(
            root,
            options,
            out var submittedComposeProjectRefValue))
        {
            return Root.SubmittedComposeProjectRef(submittedComposeProjectRefValue);
        }
        return Root.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Root value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedComposeProjectRef(out var submittedComposeProjectRefValue))
        {
            JsonSerializer.Serialize(writer, submittedComposeProjectRefValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Root)} contains no valid value to serialize.");
        }
    }
}
