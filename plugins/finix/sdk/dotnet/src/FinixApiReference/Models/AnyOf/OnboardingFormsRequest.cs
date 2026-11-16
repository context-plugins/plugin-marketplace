using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(OnboardingFormsRequestConverter))]
public record OnboardingFormsRequest
{
    private readonly Optional<CreateOnboardingForm> _createOnboardingFormValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OnboardingFormsRequest(Optional<CreateOnboardingForm> createOnboardingFormValue,
        Optional<UnknownArm> unknownValue)
    {
        _createOnboardingFormValue = createOnboardingFormValue;
        _unknownValue = unknownValue;
    }

    public static OnboardingFormsRequest CreateOnboardingForm(CreateOnboardingForm value) =>
        new(Optional<CreateOnboardingForm>.Some(value), default);

    internal static OnboardingFormsRequest Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCreateOnboardingForm([NotNullWhen(true)] out CreateOnboardingForm? value) =>
        _createOnboardingFormValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OnboardingFormsRequest(CreateOnboardingForm value) => CreateOnboardingForm(value);

    public TResult Match<TResult>(Func<CreateOnboardingForm, TResult> onCreateOnboardingForm,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCreateOnboardingForm(out var createOnboardingFormValue) => onCreateOnboardingForm(
                createOnboardingFormValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OnboardingFormsRequest)} holds no value.")
        };

    public void Match(Action<CreateOnboardingForm> onCreateOnboardingForm, Action<JsonElement> otherwise)
    {
        if (TryGetCreateOnboardingForm(out var createOnboardingFormValue)) onCreateOnboardingForm(
            createOnboardingFormValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OnboardingFormsRequest)} holds no value.");
    }
}

file sealed class OnboardingFormsRequestConverter : JsonConverter<OnboardingFormsRequest>
{
    public override OnboardingFormsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CreateOnboardingForm>(root, options, out var createOnboardingFormValue))
        {
            return OnboardingFormsRequest.CreateOnboardingForm(createOnboardingFormValue);
        }
        return OnboardingFormsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OnboardingFormsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetCreateOnboardingForm(out var createOnboardingFormValue))
        {
            JsonSerializer.Serialize(writer, createOnboardingFormValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(OnboardingFormsRequest)} contains no valid value to serialize.");
        }
    }
}
