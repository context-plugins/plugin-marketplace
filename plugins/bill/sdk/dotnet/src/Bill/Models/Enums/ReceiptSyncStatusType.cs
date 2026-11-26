using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// ReceiptSyncStatusType enum for Spend \&amp; Expense Transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReceiptSyncStatusType>))]
public sealed record ReceiptSyncStatusType : OpenStringEnum<ReceiptSyncStatusType>
{
    private ReceiptSyncStatusType(string value) : base(value)
    {
    }

    public static readonly ReceiptSyncStatusType NotSynced = new("NOT_SYNCED");

    public static readonly ReceiptSyncStatusType Synced = new("SYNCED");

    public static readonly ReceiptSyncStatusType SyncError = new("SYNC_ERROR");

    public static readonly ReceiptSyncStatusType NoAttachments = new("NO_ATTACHMENTS");

    public TResult Match<TResult>(Func<TResult> onNotSynced,
        Func<TResult> onSynced,
        Func<TResult> onSyncError,
        Func<TResult> onNoAttachments,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotSynced => onNotSynced(),
            _ when this == Synced => onSynced(),
            _ when this == SyncError => onSyncError(),
            _ when this == NoAttachments => onNoAttachments(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotSynced,
        Action onSynced,
        Action onSyncError,
        Action onNoAttachments,
        Action<string> otherwise)
    {
        if (this == NotSynced) onNotSynced();
        else if (this == Synced) onSynced();
        else if (this == SyncError) onSyncError();
        else if (this == NoAttachments) onNoAttachments();
        else otherwise(Value);
    }
}
