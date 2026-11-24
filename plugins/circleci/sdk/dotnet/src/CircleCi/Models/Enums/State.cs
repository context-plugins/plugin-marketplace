using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

/// <summary>
/// The current state of the pipeline
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Created = new("created");

    public static readonly State Errored = new("errored");

    public static readonly State SetupPending = new("setup-pending");

    public static readonly State Setup = new("setup");

    public static readonly State Pending = new("pending");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onErrored,
        Func<TResult> onSetupPending,
        Func<TResult> onSetup,
        Func<TResult> onPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Errored => onErrored(),
            _ when this == SetupPending => onSetupPending(),
            _ when this == Setup => onSetup(),
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onErrored,
        Action onSetupPending,
        Action onSetup,
        Action onPending,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Errored) onErrored();
        else if (this == SetupPending) onSetupPending();
        else if (this == Setup) onSetup();
        else if (this == Pending) onPending();
        else otherwise(Value);
    }
}
