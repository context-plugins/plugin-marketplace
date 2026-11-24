using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FailedRowsConfigurationStateDto>))]
public sealed record FailedRowsConfigurationStateDto : OpenStringEnum<FailedRowsConfigurationStateDto>
{
    private FailedRowsConfigurationStateDto(string value) : base(value)
    {
    }

    public static readonly FailedRowsConfigurationStateDto Ready = new("ready");

    public static readonly FailedRowsConfigurationStateDto DoNotDetectAutomatically = new("doNotDetectAutomatically");

    public static readonly FailedRowsConfigurationStateDto AwaitingPrimaryKeysInformationFromAgent = new(
        "awaitingPrimaryKeysInformationFromAgent");

    public static readonly FailedRowsConfigurationStateDto AwaitingPrimaryKeysInformationFromRunner = new(
        "awaitingPrimaryKeysInformationFromRunner");

    public static readonly FailedRowsConfigurationStateDto ErrorMissingUniqueKeys = new("errorMissingUniqueKeys");

    public TResult Match<TResult>(Func<TResult> onReady,
        Func<TResult> onDoNotDetectAutomatically,
        Func<TResult> onAwaitingPrimaryKeysInformationFromAgent,
        Func<TResult> onAwaitingPrimaryKeysInformationFromRunner,
        Func<TResult> onErrorMissingUniqueKeys,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ready => onReady(),
            _ when this == DoNotDetectAutomatically => onDoNotDetectAutomatically(),
            _ when this == AwaitingPrimaryKeysInformationFromAgent => onAwaitingPrimaryKeysInformationFromAgent(),
            _ when this == AwaitingPrimaryKeysInformationFromRunner => onAwaitingPrimaryKeysInformationFromRunner(),
            _ when this == ErrorMissingUniqueKeys => onErrorMissingUniqueKeys(),
            _ => otherwise(Value)
        };

    public void Match(Action onReady,
        Action onDoNotDetectAutomatically,
        Action onAwaitingPrimaryKeysInformationFromAgent,
        Action onAwaitingPrimaryKeysInformationFromRunner,
        Action onErrorMissingUniqueKeys,
        Action<string> otherwise)
    {
        if (this == Ready) onReady();
        else if (this == DoNotDetectAutomatically) onDoNotDetectAutomatically();
        else if (this == AwaitingPrimaryKeysInformationFromAgent) onAwaitingPrimaryKeysInformationFromAgent();
        else if (this == AwaitingPrimaryKeysInformationFromRunner) onAwaitingPrimaryKeysInformationFromRunner();
        else if (this == ErrorMissingUniqueKeys) onErrorMissingUniqueKeys();
        else otherwise(Value);
    }
}
