using System.Collections.Generic;
using Skribble.Core.Models;
using Skribble.Models.Enums;

namespace Skribble.Requests.ValidationApi;

/// <summary>
/// The inputs of the PostValidateSignature operation.
/// </summary>
public sealed record PostValidateSignatureRequest
{
    /// <summary>
    /// Optional flag specifying the minimum signature quality required (SES, AES,
    /// QES).
    /// </summary>
    public Quality? Quality { get; init; }

    /// <summary>
    /// Optional flag indicating whether the signature must be long-term valid.
    /// </summary>
    public bool? LongTermValidation { get; init; }

    /// <summary>
    /// Optional jurisdiction (legal framework) the signature must satisfy:
    /// <c>CH</c> = Swiss law (ZertES), <c>EU</c> = EU law (eIDAS Regulation), <c>CH_EU</c> = both
    /// ZertES and eIDAS, <c>WORLD</c> = no specific jurisdiction (international). When set,
    /// the validation reports whether the signature meets the selected framework.
    /// </summary>
    public Legislation? Legislation { get; init; }

    /// <summary>
    /// Optional flag to request additional information, such as validation, format,
    /// or signer details.
    /// </summary>
    public IReadOnlyList<Info>? Infos { get; init; }

    /// <summary>
    /// File content to validate (PDF or XML)
    /// </summary>
    public required BinaryContent Content { get; init; }
}
