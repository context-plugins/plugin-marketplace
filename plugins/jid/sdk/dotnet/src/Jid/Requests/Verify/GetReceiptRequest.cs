using System.ComponentModel.DataAnnotations;

namespace Jid.Requests.Verify;

/// <summary>
/// The inputs of the GetReceipt operation.
/// </summary>
public sealed record GetReceiptRequest
{
    [RegularExpression("^rcpt_[A-Za-z0-9]{22}$")]
    public required string ReceiptId { get; init; }
}
