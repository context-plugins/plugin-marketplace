using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(GivingSpaceConverter))]
public record GivingSpace
{
    private readonly Optional<GivingSpaceResource> _givingSpaceResourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private GivingSpace(Optional<GivingSpaceResource> givingSpaceResourceValue, Optional<UnknownArm> unknownValue)
    {
        _givingSpaceResourceValue = givingSpaceResourceValue;
        _unknownValue = unknownValue;
    }

    public static GivingSpace GivingSpaceResource(GivingSpaceResource value) =>
        new(Optional<GivingSpaceResource>.Some(value), default);

    internal static GivingSpace Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetGivingSpaceResource([NotNullWhen(true)] out GivingSpaceResource? value) =>
        _givingSpaceResourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GivingSpace(GivingSpaceResource value) => GivingSpaceResource(value);

    public TResult Match<TResult>(Func<GivingSpaceResource, TResult> onGivingSpaceResource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGivingSpaceResource(out var givingSpaceResourceValue) => onGivingSpaceResource(
                givingSpaceResourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GivingSpace)} holds no value.")
        };

    public void Match(Action<GivingSpaceResource> onGivingSpaceResource, Action<JsonElement> otherwise)
    {
        if (TryGetGivingSpaceResource(out var givingSpaceResourceValue)) onGivingSpaceResource(
            givingSpaceResourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GivingSpace)} holds no value.");
    }
}

file sealed class GivingSpaceConverter : JsonConverter<GivingSpace>
{
    public override GivingSpace Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<GivingSpaceResource>(root, options, out var givingSpaceResourceValue))
        {
            return GivingSpace.GivingSpaceResource(givingSpaceResourceValue);
        }
        return GivingSpace.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GivingSpace value, JsonSerializerOptions options)
    {
        if (value.TryGetGivingSpaceResource(out var givingSpaceResourceValue))
        {
            JsonSerializer.Serialize(writer, givingSpaceResourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GivingSpace)} contains no valid value to serialize.");
        }
    }
}
