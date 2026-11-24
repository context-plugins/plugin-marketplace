using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Name of the step the job needs to complete.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Title>))]
public sealed record Title : OpenStringEnum<Title>
{
    private Title(string value) : base(value)
    {
    }

    public static readonly Title VerifyCredentials = new("verify-credentials");

    public static readonly Title RetrieveAccounts = new("retrieve-accounts");

    public static readonly Title RetrieveTransactions = new("retrieve-transactions");

    public static readonly Title RetrieveStatements = new("retrieve-statements");

    public TResult Match<TResult>(Func<TResult> onVerifyCredentials,
        Func<TResult> onRetrieveAccounts,
        Func<TResult> onRetrieveTransactions,
        Func<TResult> onRetrieveStatements,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VerifyCredentials => onVerifyCredentials(),
            _ when this == RetrieveAccounts => onRetrieveAccounts(),
            _ when this == RetrieveTransactions => onRetrieveTransactions(),
            _ when this == RetrieveStatements => onRetrieveStatements(),
            _ => otherwise(Value)
        };

    public void Match(Action onVerifyCredentials,
        Action onRetrieveAccounts,
        Action onRetrieveTransactions,
        Action onRetrieveStatements,
        Action<string> otherwise)
    {
        if (this == VerifyCredentials) onVerifyCredentials();
        else if (this == RetrieveAccounts) onRetrieveAccounts();
        else if (this == RetrieveTransactions) onRetrieveTransactions();
        else if (this == RetrieveStatements) onRetrieveStatements();
        else otherwise(Value);
    }
}
