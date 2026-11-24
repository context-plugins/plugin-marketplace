using Mailboxlayer.Core.Validation;
using Mailboxlayer.Core.Validation.Attributes;
using Mailboxlayer.Models.Enums;

namespace Mailboxlayer.Requests.Check;

/// <summary>
/// The inputs of the CheckEmail operation.
/// </summary>
public sealed record CheckEmailRequest
{
    /// <summary>
    /// Mailboxlayer API Access Key (required for all requests).
    /// </summary>
    public required string AccessKey { get; init; }

    /// <summary>
    /// Email address to validate (single validation).
    /// </summary>
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    /// <summary>
    /// Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may speed up responses but disables the <c>smtp_check</c> verdict.
    /// </summary>
    public Smtp? Smtp { get; init; }

    /// <summary>
    /// Enable catch-all mailbox detection by setting <c>catch_all=1</c>. Disabled by default because check is heavier and may increase response time. If not requested, the <c>catch_all</c> response value will typically be <c>null</c>. Some plans restrict catch-all detection.
    /// </summary>
    public CatchAll? CatchAll { get; init; }

    /// <summary>
    /// Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).
    /// </summary>
    public Format? Format { get; init; }

    /// <summary>
    /// JSONP callback function name; wrapper will be returned if specified.
    /// </summary>
    public string? Callback { get; init; }
}
