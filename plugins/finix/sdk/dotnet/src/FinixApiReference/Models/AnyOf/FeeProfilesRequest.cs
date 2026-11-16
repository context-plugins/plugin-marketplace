using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(FeeProfilesRequestConverter))]
public record FeeProfilesRequest
{
    private readonly Optional<BlendedProfile> _blendedProfileValue;

    private readonly Optional<InterchangePlusProfile> _interchangePlusProfileValue;

    private readonly Optional<InterchangePlusAndDuesAndAssessments> _interchangePlusAndDuesAndAssessmentsValue;

    private readonly Optional<AllFields> _allFieldsValue;

    private readonly Optional<NoFees> _noFeesValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FeeProfilesRequest(Optional<BlendedProfile> blendedProfileValue,
        Optional<InterchangePlusProfile> interchangePlusProfileValue,
        Optional<InterchangePlusAndDuesAndAssessments> interchangePlusAndDuesAndAssessmentsValue,
        Optional<AllFields> allFieldsValue,
        Optional<NoFees> noFeesValue,
        Optional<UnknownArm> unknownValue)
    {
        _blendedProfileValue = blendedProfileValue;
        _interchangePlusProfileValue = interchangePlusProfileValue;
        _interchangePlusAndDuesAndAssessmentsValue = interchangePlusAndDuesAndAssessmentsValue;
        _allFieldsValue = allFieldsValue;
        _noFeesValue = noFeesValue;
        _unknownValue = unknownValue;
    }

    public static FeeProfilesRequest BlendedProfile(BlendedProfile value) =>
        new(Optional<BlendedProfile>.Some(value), default, default, default, default, default);

    public static FeeProfilesRequest InterchangePlusProfile(InterchangePlusProfile value) =>
        new(default, Optional<InterchangePlusProfile>.Some(value), default, default, default, default);

    public static FeeProfilesRequest InterchangePlusAndDuesAndAssessments(InterchangePlusAndDuesAndAssessments value) =>
        new(default, default, Optional<InterchangePlusAndDuesAndAssessments>.Some(value), default, default, default);

    public static FeeProfilesRequest AllFields(AllFields value) =>
        new(default, default, default, Optional<AllFields>.Some(value), default, default);

    public static FeeProfilesRequest NoFees(NoFees value) =>
        new(default, default, default, default, Optional<NoFees>.Some(value), default);

    internal static FeeProfilesRequest Unknown(JsonElement value) =>
        new(default, default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetBlendedProfile([NotNullWhen(true)] out BlendedProfile? value) =>
        _blendedProfileValue.TryGetValue(out value);

    public bool TryGetInterchangePlusProfile([NotNullWhen(true)] out InterchangePlusProfile? value) =>
        _interchangePlusProfileValue.TryGetValue(out value);

    public bool TryGetInterchangePlusAndDuesAndAssessments([NotNullWhen(true)] out InterchangePlusAndDuesAndAssessments? value) =>
        _interchangePlusAndDuesAndAssessmentsValue.TryGetValue(out value);

    public bool TryGetAllFields([NotNullWhen(true)] out AllFields? value) => _allFieldsValue.TryGetValue(out value);

    public bool TryGetNoFees([NotNullWhen(true)] out NoFees? value) => _noFeesValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FeeProfilesRequest(BlendedProfile value) => BlendedProfile(value);

    public static implicit operator FeeProfilesRequest(InterchangePlusProfile value) => InterchangePlusProfile(value);

    public static implicit operator FeeProfilesRequest(InterchangePlusAndDuesAndAssessments value) =>
        InterchangePlusAndDuesAndAssessments(value);

    public static implicit operator FeeProfilesRequest(AllFields value) => AllFields(value);

    public static implicit operator FeeProfilesRequest(NoFees value) => NoFees(value);

    public TResult Match<TResult>(Func<BlendedProfile, TResult> onBlendedProfile,
        Func<InterchangePlusProfile, TResult> onInterchangePlusProfile,
        Func<InterchangePlusAndDuesAndAssessments, TResult> onInterchangePlusAndDuesAndAssessments,
        Func<AllFields, TResult> onAllFields,
        Func<NoFees, TResult> onNoFees,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetBlendedProfile(out var blendedProfileValue) => onBlendedProfile(blendedProfileValue),
            _ when TryGetInterchangePlusProfile(out var interchangePlusProfileValue) => onInterchangePlusProfile(
                interchangePlusProfileValue),
            _ when TryGetInterchangePlusAndDuesAndAssessments(
                out var interchangePlusAndDuesAndAssessmentsValue) => onInterchangePlusAndDuesAndAssessments(
                interchangePlusAndDuesAndAssessmentsValue),
            _ when TryGetAllFields(out var allFieldsValue) => onAllFields(allFieldsValue),
            _ when TryGetNoFees(out var noFeesValue) => onNoFees(noFeesValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FeeProfilesRequest)} holds no value.")
        };

    public void Match(Action<BlendedProfile> onBlendedProfile,
        Action<InterchangePlusProfile> onInterchangePlusProfile,
        Action<InterchangePlusAndDuesAndAssessments> onInterchangePlusAndDuesAndAssessments,
        Action<AllFields> onAllFields,
        Action<NoFees> onNoFees,
        Action<JsonElement> otherwise)
    {
        if (TryGetBlendedProfile(out var blendedProfileValue)) onBlendedProfile(blendedProfileValue);
        else if (TryGetInterchangePlusProfile(out var interchangePlusProfileValue)) onInterchangePlusProfile(
            interchangePlusProfileValue);
        else if (TryGetInterchangePlusAndDuesAndAssessments(
            out var interchangePlusAndDuesAndAssessmentsValue)) onInterchangePlusAndDuesAndAssessments(
            interchangePlusAndDuesAndAssessmentsValue);
        else if (TryGetAllFields(out var allFieldsValue)) onAllFields(allFieldsValue);
        else if (TryGetNoFees(out var noFeesValue)) onNoFees(noFeesValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FeeProfilesRequest)} holds no value.");
    }
}

file sealed class FeeProfilesRequestConverter : JsonConverter<FeeProfilesRequest>
{
    public override FeeProfilesRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<BlendedProfile>(root, options, out var blendedProfileValue))
        {
            return FeeProfilesRequest.BlendedProfile(blendedProfileValue);
        }
        if (JsonSerializer.TryDeserialize<InterchangePlusProfile>(root, options, out var interchangePlusProfileValue))
        {
            return FeeProfilesRequest.InterchangePlusProfile(interchangePlusProfileValue);
        }
        if (JsonSerializer.TryDeserialize<InterchangePlusAndDuesAndAssessments>(
            root,
            options,
            out var interchangePlusAndDuesAndAssessmentsValue))
        {
            return FeeProfilesRequest.InterchangePlusAndDuesAndAssessments(interchangePlusAndDuesAndAssessmentsValue);
        }
        if (JsonSerializer.TryDeserialize<AllFields>(root, options, out var allFieldsValue))
        {
            return FeeProfilesRequest.AllFields(allFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<NoFees>(root, options, out var noFeesValue))
        {
            return FeeProfilesRequest.NoFees(noFeesValue);
        }
        return FeeProfilesRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FeeProfilesRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetBlendedProfile(out var blendedProfileValue))
        {
            JsonSerializer.Serialize(writer, blendedProfileValue, options);
        }
        else if (value.TryGetInterchangePlusProfile(out var interchangePlusProfileValue))
        {
            JsonSerializer.Serialize(writer, interchangePlusProfileValue, options);
        }
        else if (value.TryGetInterchangePlusAndDuesAndAssessments(out var interchangePlusAndDuesAndAssessmentsValue))
        {
            JsonSerializer.Serialize(writer, interchangePlusAndDuesAndAssessmentsValue, options);
        }
        else if (value.TryGetAllFields(out var allFieldsValue))
        {
            JsonSerializer.Serialize(writer, allFieldsValue, options);
        }
        else if (value.TryGetNoFees(out var noFeesValue))
        {
            JsonSerializer.Serialize(writer, noFeesValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FeeProfilesRequest)} contains no valid value to serialize.");
        }
    }
}
