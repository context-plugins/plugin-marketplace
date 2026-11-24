using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

[JsonConverter(typeof(JudgeConverter))]
public record Judge
{
    private readonly Optional<RunJudgeSettings> _runJudgeSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Judge(Optional<RunJudgeSettings> runJudgeSettingsValue, Optional<UnknownArm> unknownValue)
    {
        _runJudgeSettingsValue = runJudgeSettingsValue;
        _unknownValue = unknownValue;
    }

    public static Judge RunJudgeSettings(RunJudgeSettings value) =>
        new(Optional<RunJudgeSettings>.Some(value), default);

    internal static Judge Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRunJudgeSettings([NotNullWhen(true)] out RunJudgeSettings? value) =>
        _runJudgeSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Judge(RunJudgeSettings value) => RunJudgeSettings(value);

    public TResult Match<TResult>(Func<RunJudgeSettings, TResult> onRunJudgeSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRunJudgeSettings(out var runJudgeSettingsValue) => onRunJudgeSettings(runJudgeSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Judge)} holds no value.")
        };

    public void Match(Action<RunJudgeSettings> onRunJudgeSettings, Action<JsonElement> otherwise)
    {
        if (TryGetRunJudgeSettings(out var runJudgeSettingsValue)) onRunJudgeSettings(runJudgeSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Judge)} holds no value.");
    }
}

file sealed class JudgeConverter : JsonConverter<Judge>
{
    public override Judge Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RunJudgeSettings>(root, options, out var runJudgeSettingsValue))
        {
            return Judge.RunJudgeSettings(runJudgeSettingsValue);
        }
        return Judge.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Judge value, JsonSerializerOptions options)
    {
        if (value.TryGetRunJudgeSettings(out var runJudgeSettingsValue))
        {
            JsonSerializer.Serialize(writer, runJudgeSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Judge)} contains no valid value to serialize.");
        }
    }
}
