using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ResourcesConverter))]
public record Resources
{
    private readonly Optional<SubmittedRuntimeResources> _submittedRuntimeResourcesValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Resources(Optional<SubmittedRuntimeResources> submittedRuntimeResourcesValue,
        Optional<UnknownArm> unknownValue)
    {
        _submittedRuntimeResourcesValue = submittedRuntimeResourcesValue;
        _unknownValue = unknownValue;
    }

    public static Resources SubmittedRuntimeResources(SubmittedRuntimeResources value) =>
        new(Optional<SubmittedRuntimeResources>.Some(value), default);

    internal static Resources Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetSubmittedRuntimeResources([NotNullWhen(true)] out SubmittedRuntimeResources? value) =>
        _submittedRuntimeResourcesValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Resources(SubmittedRuntimeResources value) => SubmittedRuntimeResources(value);

    public TResult Match<TResult>(Func<SubmittedRuntimeResources, TResult> onSubmittedRuntimeResources,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSubmittedRuntimeResources(
                out var submittedRuntimeResourcesValue) => onSubmittedRuntimeResources(submittedRuntimeResourcesValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Resources)} holds no value.")
        };

    public void Match(Action<SubmittedRuntimeResources> onSubmittedRuntimeResources, Action<JsonElement> otherwise)
    {
        if (TryGetSubmittedRuntimeResources(out var submittedRuntimeResourcesValue)) onSubmittedRuntimeResources(
            submittedRuntimeResourcesValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Resources)} holds no value.");
    }
}

file sealed class ResourcesConverter : JsonConverter<Resources>
{
    public override Resources Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<SubmittedRuntimeResources>(
            root,
            options,
            out var submittedRuntimeResourcesValue))
        {
            return Resources.SubmittedRuntimeResources(submittedRuntimeResourcesValue);
        }
        return Resources.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Resources value, JsonSerializerOptions options)
    {
        if (value.TryGetSubmittedRuntimeResources(out var submittedRuntimeResourcesValue))
        {
            JsonSerializer.Serialize(writer, submittedRuntimeResourcesValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Resources)} contains no valid value to serialize.");
        }
    }
}
