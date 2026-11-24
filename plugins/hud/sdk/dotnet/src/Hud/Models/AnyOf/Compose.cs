using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ComposeConverter))]
public record Compose
{
    private readonly Optional<SubmittedComposeProject> _submittedComposeProjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Compose(Optional<SubmittedComposeProject> submittedComposeProjectValue, Optional<UnknownArm> unknownValue)
    {
        _submittedComposeProjectValue = submittedComposeProjectValue;
        _unknownValue = unknownValue;
    }

    public static Compose SubmittedComposeProject(SubmittedComposeProject value) =>
        new(Optional<SubmittedComposeProject>.Some(value), default);

    internal static Compose Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedComposeProject([NotNullWhen(true)] out SubmittedComposeProject? value) =>
        _submittedComposeProjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Compose(SubmittedComposeProject value) => SubmittedComposeProject(value);

    public TResult Match<TResult>(Func<SubmittedComposeProject, TResult> onSubmittedComposeProject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedComposeProject(out var submittedComposeProjectValue) => onSubmittedComposeProject(
                submittedComposeProjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Compose)} holds no value.")
        };

    public void Match(Action<SubmittedComposeProject> onSubmittedComposeProject, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedComposeProject(out var submittedComposeProjectValue)) onSubmittedComposeProject(
            submittedComposeProjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Compose)} holds no value.");
    }
}

file sealed class ComposeConverter : JsonConverter<Compose>
{
    public override Compose Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedComposeProject>(root, options, out var submittedComposeProjectValue))
        {
            return Compose.SubmittedComposeProject(submittedComposeProjectValue);
        }
        return Compose.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Compose value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedComposeProject(out var submittedComposeProjectValue))
        {
            JsonSerializer.Serialize(writer, submittedComposeProjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Compose)} contains no valid value to serialize.");
        }
    }
}
