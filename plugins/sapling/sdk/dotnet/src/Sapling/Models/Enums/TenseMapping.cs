using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Target tense. Only used with mapping="switch_tense".
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TenseMapping>))]
public sealed record TenseMapping : OpenStringEnum<TenseMapping>
{
    private TenseMapping(string value) : base(value)
    {
    }

    public static readonly TenseMapping SimplePast = new("simple past");

    public static readonly TenseMapping PastPerfect = new("past perfect");

    public static readonly TenseMapping PastContinuous = new("past continuous");

    public static readonly TenseMapping PastPerfectContinuous = new("past perfect continuous");

    public static readonly TenseMapping SimplePresent = new("simple present");

    public static readonly TenseMapping PresentPerfect = new("present perfect");

    public static readonly TenseMapping PresentContinuous = new("present continuous");

    public static readonly TenseMapping PresentPerfectContinuous = new("present perfect continuous");

    public static readonly TenseMapping SimpleFuture = new("simple future");

    public static readonly TenseMapping FuturePerfect = new("future perfect");

    public static readonly TenseMapping FutureContinuous = new("future continuous");

    public static readonly TenseMapping FuturePerfectContinuous = new("future perfect continuous");

    public TResult Match<TResult>(Func<TResult> onSimplePast,
        Func<TResult> onPastPerfect,
        Func<TResult> onPastContinuous,
        Func<TResult> onPastPerfectContinuous,
        Func<TResult> onSimplePresent,
        Func<TResult> onPresentPerfect,
        Func<TResult> onPresentContinuous,
        Func<TResult> onPresentPerfectContinuous,
        Func<TResult> onSimpleFuture,
        Func<TResult> onFuturePerfect,
        Func<TResult> onFutureContinuous,
        Func<TResult> onFuturePerfectContinuous,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SimplePast => onSimplePast(),
            _ when this == PastPerfect => onPastPerfect(),
            _ when this == PastContinuous => onPastContinuous(),
            _ when this == PastPerfectContinuous => onPastPerfectContinuous(),
            _ when this == SimplePresent => onSimplePresent(),
            _ when this == PresentPerfect => onPresentPerfect(),
            _ when this == PresentContinuous => onPresentContinuous(),
            _ when this == PresentPerfectContinuous => onPresentPerfectContinuous(),
            _ when this == SimpleFuture => onSimpleFuture(),
            _ when this == FuturePerfect => onFuturePerfect(),
            _ when this == FutureContinuous => onFutureContinuous(),
            _ when this == FuturePerfectContinuous => onFuturePerfectContinuous(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimplePast,
        Action onPastPerfect,
        Action onPastContinuous,
        Action onPastPerfectContinuous,
        Action onSimplePresent,
        Action onPresentPerfect,
        Action onPresentContinuous,
        Action onPresentPerfectContinuous,
        Action onSimpleFuture,
        Action onFuturePerfect,
        Action onFutureContinuous,
        Action onFuturePerfectContinuous,
        Action<string> otherwise)
    {
        if (this == SimplePast) onSimplePast();
        else if (this == PastPerfect) onPastPerfect();
        else if (this == PastContinuous) onPastContinuous();
        else if (this == PastPerfectContinuous) onPastPerfectContinuous();
        else if (this == SimplePresent) onSimplePresent();
        else if (this == PresentPerfect) onPresentPerfect();
        else if (this == PresentContinuous) onPresentContinuous();
        else if (this == PresentPerfectContinuous) onPresentPerfectContinuous();
        else if (this == SimpleFuture) onSimpleFuture();
        else if (this == FuturePerfect) onFuturePerfect();
        else if (this == FutureContinuous) onFutureContinuous();
        else if (this == FuturePerfectContinuous) onFuturePerfectContinuous();
        else otherwise(Value);
    }
}
