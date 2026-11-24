using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The unique error code for the failed custom vocabulary item from the custom vocabulary list.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorCode>))]
public sealed record ErrorCode : OpenStringEnum<ErrorCode>
{
    private ErrorCode(string value) : base(value)
    {
    }

    public static readonly ErrorCode DuplicateInput = new("DUPLICATE_INPUT");

    public static readonly ErrorCode ResourceDoesNotExist = new("RESOURCE_DOES_NOT_EXIST");

    public static readonly ErrorCode ResourceAlreadyExists = new("RESOURCE_ALREADY_EXISTS");

    public static readonly ErrorCode InternalServerFailure = new("INTERNAL_SERVER_FAILURE");

    public TResult Match<TResult>(Func<TResult> onDuplicateInput,
        Func<TResult> onResourceDoesNotExist,
        Func<TResult> onResourceAlreadyExists,
        Func<TResult> onInternalServerFailure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DuplicateInput => onDuplicateInput(),
            _ when this == ResourceDoesNotExist => onResourceDoesNotExist(),
            _ when this == ResourceAlreadyExists => onResourceAlreadyExists(),
            _ when this == InternalServerFailure => onInternalServerFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onDuplicateInput,
        Action onResourceDoesNotExist,
        Action onResourceAlreadyExists,
        Action onInternalServerFailure,
        Action<string> otherwise)
    {
        if (this == DuplicateInput) onDuplicateInput();
        else if (this == ResourceDoesNotExist) onResourceDoesNotExist();
        else if (this == ResourceAlreadyExists) onResourceAlreadyExists();
        else if (this == InternalServerFailure) onInternalServerFailure();
        else otherwise(Value);
    }
}
