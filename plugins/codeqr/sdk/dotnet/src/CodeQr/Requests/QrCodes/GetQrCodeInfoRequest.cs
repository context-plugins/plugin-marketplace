using System.ComponentModel.DataAnnotations;

namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the GetQrCodeInfo operation.
/// </summary>
public sealed record GetQrCodeInfoRequest
{
    /// <summary>
    /// The slug of the project to which the QR code belongs. For example, for <c>app.codeqr.io/acme</c>, the projectSlug is <c>acme</c>.
    /// </summary>
    [MinLength(1)]
    public required string ProjectSlug { get; init; }

    [MinLength(1)]
    public required string Domain { get; init; }

    /// <summary>
    /// The key of the QR code to be retrieved. For example, for <c>codeqr.link/github</c>, the key is <c>github</c>.
    /// </summary>
    [MinLength(1)]
    public required string Key { get; init; }

    /// <summary>
    /// The unique ID of the QR code.
    /// </summary>
    public string? QrCodeId { get; init; }

    /// <summary>
    /// This is the ID of the QR code in your database. It must be prefixed with <c>ext_</c> when passed as a query parameter.
    /// </summary>
    public string? ExternalId { get; init; }
}
