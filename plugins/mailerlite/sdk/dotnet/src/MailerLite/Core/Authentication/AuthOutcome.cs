using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace MailerLite.Core.Authentication;

internal sealed class AuthOutcome
{
    private readonly IReadOnlyList<string>? _unsatisfiedSchemes;

    private AuthOutcome(IReadOnlyList<string>? unsatisfiedSchemes) => _unsatisfiedSchemes = unsatisfiedSchemes;

    public static AuthOutcome Applied { get; } = new(null);

    public static AuthOutcome Unsatisfied(params IReadOnlyList<string> schemes) => schemes is []
        ? throw new ArgumentException("At least one unsatisfied scheme is required.", nameof(schemes))
        : new AuthOutcome([.. schemes.Distinct(StringComparer.Ordinal)]);

    public bool IsApplied => _unsatisfiedSchemes is null;

    public bool TryGetUnsatisfied([NotNullWhen(true)] out IReadOnlyList<string>? schemes)
    {
        schemes = _unsatisfiedSchemes;
        return schemes is not null;
    }
}
