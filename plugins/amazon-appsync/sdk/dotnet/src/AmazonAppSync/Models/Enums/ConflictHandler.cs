using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The Conflict Resolution strategy to perform in the event of a conflict. OPTIMISTIC_CONCURRENCY: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server. AUTOMERGE: Resolve conflicts with the Automerge conflict resolution strategy. LAMBDA: Resolve conflicts with an Lambda function supplied in the LambdaConflictHandlerConfig.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConflictHandler>))]
public sealed record ConflictHandler : OpenStringEnum<ConflictHandler>
{
    private ConflictHandler(string value) : base(value)
    {
    }

    public static readonly ConflictHandler OptimisticConcurrency = new("OPTIMISTIC_CONCURRENCY");

    public static readonly ConflictHandler Lambda = new("LAMBDA");

    public static readonly ConflictHandler Automerge = new("AUTOMERGE");

    public static readonly ConflictHandler None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onOptimisticConcurrency,
        Func<TResult> onLambda,
        Func<TResult> onAutomerge,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OptimisticConcurrency => onOptimisticConcurrency(),
            _ when this == Lambda => onLambda(),
            _ when this == Automerge => onAutomerge(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onOptimisticConcurrency,
        Action onLambda,
        Action onAutomerge,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == OptimisticConcurrency) onOptimisticConcurrency();
        else if (this == Lambda) onLambda();
        else if (this == Automerge) onAutomerge();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
